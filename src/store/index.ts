import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer
});

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
