import { Action } from '@ngrx/store';

export class ActionFactory {
    public getAuthToken(): GetAuthToken {
        return new GetAuthToken();
    }
}

export class InternalActionFactory {
    public getAuthTokenSuccess(response: string): GetAuthTokenSuccess {
        return new GetAuthTokenSuccess(response);
    }
}

export class GetAuthToken implements Action {
    public static readonly Type = '[Auth] Get Auth Token';
    public readonly type = GetAuthToken.Type;
}

export class GetAuthTokenSuccess implements Action {
    public static readonly Type = '[Auth] Get Auth Token Success';
    public readonly type = GetAuthTokenSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = GetAuthToken | GetAuthTokenSuccess;