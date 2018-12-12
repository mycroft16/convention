import { EffectsModule } from '@ngrx/effects';
import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { ModuleWithProviders } from '@angular/core';
import { AppState, AppStore } from './app.store';

import { ApiService } from './api/api.service';

// import { NotificationsEffects } from './notifications/notifications.effects'
// import { NotificationsService } from './notifications/notifications.service'
// import * as NotificationsState from './notifications/notifications.state'

// import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    // NotificationsService,
    AppStore
]

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    // NotificationsEffects,
]);

export const STORES: any = {
    // notifications: NotificationsState.reducer,
}