import * as AuthActions from './auth.actions';

export interface State {
    authToken: string;
}

export const initialState: State = {
    authToken: null
}

export function reducer(state: State = initialState, action: AuthActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case AuthActions.GetAuthTokenSuccess.Type: {
            return { ...state, ...{ authToken: action.response } }
        }

        case AuthActions.SetLoginToken.Type: {
            return { ...state, ...{ authToken: action.token } }
        }

        default: {
            return state;
        }

    }
}