import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

//App Screens
import Login from '../views/containers/Authentication/Login';
import Authenticated from '../views/containers/Authentication/TestAuthenticated';
import { AppRoutes } from './AppRoutes';
import { AuthContext } from '../context/AuthContext';

import { AuthenticatedStack } from './stacks/AuthenticatedStack';
import { PublicStack } from './stacks/PublicStack';
import { InitialStack } from './stacks/InititalStack';

const AppNavigation = () => {
	let { state } = useContext(AuthContext);
	const [ isAppLoading, setIsAppLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsAppLoading(false);
		}, 2000);
	}, []);

	return (
		<NavigationContainer ref={navigationRef}>
			{isAppLoading ? (
				<InitialStack />
			) : /**Add main stack navigation: Login, Authenticated Root Stack */
			state && state.isLoggedIn ? (
				<AuthenticatedStack />
			) : (
				<PublicStack />
			)}
		</NavigationContainer>
	);
};

export default AppNavigation;
