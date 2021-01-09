import { types } from '../types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import Swal from 'sweetalert2';
import { RootState } from '..';
import { finishLoading, startLoading } from './ui';
import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig';

type AsyncAction = ThunkAction<void, RootState, unknown, Action<string>>;

export const startLoginWithEmail = (
	email: string,
	password: string
): AsyncAction => {
	return async dispatch => {
		dispatch(startLoading());

		try {
			const { user } = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);

			dispatch(login(user?.uid, user?.displayName));
			dispatch(finishLoading());
		} catch (error) {
			dispatch(finishLoading());
			Swal.fire('error', error.message, 'error');
		}
	};
};

export const starRegisterWithEmail = (
	email: string,
	password: string,
	name: string
): AsyncAction => {
	return async dispacth => {
		const { user } = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);

		await user?.updateProfile({ displayName: name });

		dispacth(login(user?.uid, user?.displayName));
	};
};

export const startGoogleLogin = (): AsyncAction => {
	return async dispatch => {
		const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);

		dispatch(login(user?.uid, user?.displayName));
	};
};

export const login = (uid?: string, displayName?: string | null) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName
		}
	};
};

export const startLogout = (): AsyncAction => {
	return async dispacth => {
		await firebase.auth().signOut();
		dispacth(logout());
	};
};

export const logout = () => ({ type: types.logout });
