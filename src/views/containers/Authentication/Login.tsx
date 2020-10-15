import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { AuthContext } from '../../../context/AuthContext';
import { AppRoutes } from '../../../navigation/AppRoutes';
import * as RootNavigation from '../../../navigation/RootNavigation';

interface LoginProps {}

const Login = (props: LoginProps) => {
	let { state, updateAuth } = useContext(AuthContext);

    if(state && state.isLoggedIn){
        RootNavigation.navigate(AppRoutes.AUTHENTICATED)
    }

	return (
		<View style={styles.container}>
			<Text style={{color: "#fff"}}>Login {state &&  state.isLoggedIn.toString() + state.trial}</Text>
            <Button
                title={"LOGIN"}
                onPress={()=>updateAuth?.(true)}
            />
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppColors.Primary
	}
});
