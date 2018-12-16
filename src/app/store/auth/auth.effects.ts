import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { AppStore } from '../app.store';
import { AuthService } from './auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    
    @Effect()
    public getAuthToken: Observable<Action> = this.actions.ofType(AuthActions.GetAuthToken.Type)
        .pipe(
            switchMap((action: AuthActions.GetAuthToken) =>
                this.service.getAuthToken()
                    .pipe(map(response => this.store.create(factory => factory.auth.getAuthTokenSuccess(response)))
                    )
            )
        );

    @Effect()
    public getLoginToken: Observable<Action> = this.actions.ofType(AuthActions.GetLoginToken.Type)
        .pipe(
            switchMap((action: AuthActions.GetLoginToken) =>
                this.service.getLoginToken()
                    .pipe(map(response => this.store.create(factory => factory.auth.getLoginTokenSuccess(response))))
            )
        );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: AuthService
    ) { }

}