import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { AppStore } from '../app.store';
import { ConventionsService } from './conventions.service';
import * as ConventionsActions from './conventions.actions';

@Injectable()
export class ConventionsEffects {

    @Effect()
    public loadConventions: Observable<Action> = this.actions.ofType(ConventionsActions.LoadConventions.Type)
        .pipe(
            switchMap((action: ConventionsActions.LoadConventions) =>
                this.service.loadConventions()
                    .pipe(map(response => this.store.create(factory => factory.conventions.loadConventionsSuccess(response))))
            )
        );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: ConventionsService
    ) { }

}