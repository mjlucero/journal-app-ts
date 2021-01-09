import { types } from '../types';

interface IUiState {
	loading: boolean;
	errorMessage: string;
}

interface IAction {
	type: string;
	payload: string;
}

const initialState: IUiState = {
	loading: false,
	errorMessage: ''
};

export const uiReducer = (state = initialState, action: IAction): IUiState => {
	switch (action.type) {
		case types.uiSetErrorMessage:
			return {
				...state,
				errorMessage: action.payload
			};

		case types.uiRemoveErrorMessage:
			return {
				...state,
				errorMessage: ''
			};

		case types.uiStartLoading:
			return {
				...state,
				loading: true
			};

		case types.uiFinishLoading:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
};
