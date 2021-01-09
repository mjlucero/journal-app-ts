import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ICustomRouteProps } from './ICustomRouteProps';

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}: ICustomRouteProps) => {
	return (
		<Route
			{...rest}
			component={(props: any) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
			}
		/>
	);
};

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
};
