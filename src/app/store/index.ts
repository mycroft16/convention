import { EffectsModule } from '@ngrx/effects';
import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { ModuleWithProviders } from '@angular/core';
import { AppState, AppStore } from './app.store';

import { ApiService } from './api/api.service';

import { AuthEffects } from './auth/auth.effects';
import { AuthService } from './auth/auth.service';
import * as AuthState from './auth/auth.state';

import { ConventionsEffects } from './conventions/conventions.effects';
import { ConventionsService } from './conventions/conventions.service';
import * as ConventionsState from './conventions/conventions.state';

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    AuthService,
    ConventionsService,
    AppStore
]

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    AuthEffects,
    ConventionsEffects
]);

export const STORES: any = {
    auth: AuthState.reducer,
    convetions: ConventionsState.reducer
}