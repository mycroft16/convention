import * as ConventionsActions from './conventions.actions';
import { IConvention } from '../../shared/interfaces/convention.interface';

export interface State {
    list: IConvention[];
    activeConvention: IConvention;
}

export const initialState: State = {
    list: null,
    activeConvention: null
}

export function reducer(state: State = initialState, action: ConventionsActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case ConventionsActions.LoadConventionsSuccess.Type: {
            return { ...state, ...{ list: action.response, activeConvention: null} }
        }

        case ConventionsActions.SelectActiveConvention.Type: {
            return { ...state, ...{ activeConvention: state.list[action.conventionIndex] } }
        }

        case ConventionsActions.ClearActiveConvention.Type: {
            return { ...state, ...{ activeConvention: null } }
        }

        default: {
            return state;
        }

    }
}