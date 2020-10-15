import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../AppRoutes';
import TestAuthenticated from '../../views/containers/Authentication/TestAuthenticated';

const Stack = createStackNavigator();

export const AuthenticatedStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ headerShown: false }}
				name={AppRoutes.AUTHENTICATED}
				component={TestAuthenticated}
			/>
		</Stack.Navigator>
	);
};
