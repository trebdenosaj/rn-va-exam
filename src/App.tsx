import React from 'react';
import { SafeAreaView } from 'react-native';
import { BASE_API_URL } from './config/main';
import AppNavigation from './navigation/AppNavigation';
import { ApiService } from './utils/ApiService';

const App: React.FC = () => {

  ApiService.get({
    url: `${BASE_API_URL}?q=snaphunt&sort=stars&order=desc`
  })
  .then(res=>res.json())
  .then(res=>alert(JSON.stringify(res)))
  
	return (
		<SafeAreaView>
			<AppNavigation />
		</SafeAreaView>
	);
};

export default App;
