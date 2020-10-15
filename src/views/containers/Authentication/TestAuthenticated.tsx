import React, {useContext} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { AuthContext } from '../../../context/AuthContext';

const TestAuthenticated = () => {
    let { state, updateAuth } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>TestAuthenticated</Text>
            <Button
                title={"LOGOUT"}
                onPress={()=>updateAuth?.(false)}
            />
        </View>
    );
};

export default TestAuthenticated;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: AppColors.Primary
  }
});
