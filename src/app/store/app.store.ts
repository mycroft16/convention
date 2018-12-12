import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/operator/map';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import * as NotificationsActions from './notifications/notifications.actions'
// import * as NotificationsState from './notifications/notifications.state'

// import * as LoadingIndicatorActions from './loading-indicator/loading-indicator.actions'
// import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export type NotificationsState = NotificationsState.State;
export type LoadingIndicatorState = LoadingIndicatorState.State;

export interface ActionFactory {
    readonly notifications: NotificationsActions.ActionFactory;
    readonly loadingIndicator: LoadingIndicatorActions.ActionFactory;
}

export interface InternalActionFactory {
    readonly notifications: NotificationsActions.InternalActionFactory;
    readonly loadingIndicator: LoadingIndicatorState.InternalActionFactory;
}

export interface AppState {
    readonly notifications: NotificationsState;
    readonly loadingIndicator: LoadingIndicatorState;
}

export interface AppReducers {
    readonly [reducerName: string]: Function;
}

export const reducers: AppReducers = {
    notifications: NotificationsState.reducer,
    loadingIndicator: LoadingIndicatorState.reducer
}

export type ActionFactoryMapper = (factory: ActionFactory) => Action;
export type InternalActionFactoryMapper = (factory: InternalActionFactory) => Action;
export type StateMapper<T> = (state: AppState) => T;

@Injectable()
export class AppStore {
    constructor(
        private readonly ngrxStore: Store<AppState>
    ) { }

    public dispatch(actionFactoryMapper: ActionFactoryMapper): void {
        this.ngrxStore.dispatch(actionFactoryMapper(this.actionFactory));
    }

    public create(internalActionFactoryMapper: InternalActionFactoryMapper): Action {
        return internalActionFactoryMapper(this.internalActionFactory);
    }

    public select<T>(stateMapper: StateMapper<T>): Observable<T> {
        return this.ngrxStore.select(stateMapper);
    }

    public snapshot<T>(stateMapper: StateMapper<T>): T {
        let snapshot: T;
        this.select(stateMapper).take(1).subscribe((latest: T) => snapshot = latest);

        return snapshot;
    }

    public snapshotCloned<T>(stateMapper: StateMapper<T>): T {
        let snapshot: T;
        this.select(stateMapper).take(1).subscribe((latest: T) => snapshot = latest);
        return JSON.parse(JSON.stringify(snapshot));
    }

    public completeSnapshot(): AppState {
        return this.snapshot(state => state);
    }

    public match<T>(value: T, stateMapper: StateMapper<T>): boolean {
        return value === this.snapshot(stateMapper);
    }

    public blockUntil(stateMapper: StateMapper<boolean>): Observable<boolean> {
        return this.select(stateMapper).filter((selectedValue: boolean) => selectedValue).take(1);
    }

    public blockUntilMatch<T>(value: T, stateMapper: StateMapper<T>): Observable<null> {
        return this.select(stateMapper).filter((selectedValue: T) => value === selectedValue).take(1).map(() => null);
    }

    private readonly actionFactory: ActionFactory = {
        notifications: new NotificationsActions.ActionFactory,
        loadingIndicator: new LoadingIndicatorActions.ActionFactory
    }

    private readonly internalActionFactory: InternalActionFactory = {
        notifications: new NotificationsActions.InternalActionFactory,
        loadingIndicator: new LoadingIndicatorActions.InternalActionFactory
    }

}