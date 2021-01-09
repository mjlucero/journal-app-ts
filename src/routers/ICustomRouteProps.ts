import { RouteProps } from 'react-router-dom';

export interface ICustomRouteProps extends Omit<RouteProps, 'component'> {
	isAuthenticated: boolean;
	component: React.ElementType;
}
