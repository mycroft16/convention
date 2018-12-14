import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/operator/map';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import * as AuthActions from './auth/auth.actions';
import * as AuthState from './auth/auth.state';

import * as ConventionsActions from './conventions/conventions.actions';
import * as ConventionsState from './conventions/conventions.state';

export type AuthState = AuthState.State;
export type ConventionsState = ConventionsState.State;

export interface ActionFactory {
    readonly auth: AuthActions.ActionFactory;
    readonly conventions: ConventionsActions.ActionFactory;
}

export interface InternalActionFactory {
    readonly auth: AuthActions.InternalActionFactory;
    readonly conventions: ConventionsActions.InternalActionFactory;
}

export interface AppState {
    readonly auth: AuthState;
    readonly conventions: ConventionsState;
}

export interface AppReducers {
    readonly [reducerName: string]: Function;
}

export const reducers: AppReducers = {
    auth: AuthState.reducer,
    conventions: ConventionsState.reducer
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
        auth: new AuthActions.ActionFactory,
        conventions: new ConventionsActions.ActionFactory
    }

    private readonly internalActionFactory: InternalActionFactory = {
        auth: new AuthActions.InternalActionFactory,
        conventions: new ConventionsActions.InternalActionFactory
    }

}