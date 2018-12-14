import { Action } from '@ngrx/store';
import { IConvention } from '../../shared/interfaces/convention.interface';

export class ActionFactory {
    public loadConventions(): LoadConventions {
        return new LoadConventions();
    }

    public selectActiveConvention(conventionIndex: number): SelectActiveConvention {
        return new SelectActiveConvention(conventionIndex);
    }

    public clearActiveConvention(): ClearActiveConvention {
        return new ClearActiveConvention();
    }
}

export class InternalActionFactory {
    public loadConventionsSuccess(response: IConvention[]): LoadConventionsSuccess {
        return new LoadConventionsSuccess(response);
    }
}

export class LoadConventions implements Action {
    public static readonly Type = '[Conventions] Load Conventions';
    public readonly type = LoadConventions.Type;
}

export class LoadConventionsSuccess implements Action {
    public static readonly Type = '[Conventions] Load Conventions Success';
    public readonly type = LoadConventionsSuccess.Type;
    constructor(public readonly response) { }
}

export class SelectActiveConvention implements Action {
    public static readonly Type = '[Conventions] Select Active Convention';
    public readonly type = SelectActiveConvention.Type;
    constructor(public readonly conventionIndex) { }
}

export class ClearActiveConvention implements Action {
    public static readonly Type = '[Conventions] Clear Active Convention';
    public readonly type = ClearActiveConvention.Type;
}

export type Any = LoadConventions | LoadConventionsSuccess | SelectActiveConvention | ClearActiveConvention;