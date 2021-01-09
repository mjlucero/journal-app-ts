import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../store/actions/auth';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}

			setChecking(false);
		});
	}, [dispatch]);

	if (checking) {
		return <h1>Loading...</h1>;
	}

	return (
		<Router>
			<>
				<Switch>
					<PublicRoute
						isAuthenticated={isLoggedIn}
						path="/auth"
						component={AuthRouter}
					/>
					<PrivateRoute
						exact
						isAuthenticated={isLoggedIn}
						path="/"
						component={JournalScreen}
					/>
					<Redirect to="auth/login" />
				</Switch>
			</>
		</Router>
	);
};
