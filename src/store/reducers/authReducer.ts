import { types } from '../types';

interface IAuthState {
	uid?: string;
	name?: string;
}

interface IAction {
	type: string;
	payload: IAuthPayload;
}

interface IAuthPayload {
	uid: string;
	displayName: string;
}

export const authReducer = (state: IAuthState = {}, action: IAction) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName
			};
		case types.logout:
			return {};
		default:
			return state;
	}
};
