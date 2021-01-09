import { types } from '../types';

export const setErrorMessage = (errorMessage: string) => ({
	type: types.uiSetErrorMessage,
	payload: errorMessage
});

export const removeErrorMessage = () => ({
	type: types.uiRemoveErrorMessage
});

export const startLoading = () => ({
	type: types.uiStartLoading
});

export const finishLoading = () => ({
	type: types.uiFinishLoading
});
