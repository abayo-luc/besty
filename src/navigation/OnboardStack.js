import { createStackNavigator } from 'react-navigation-stack';
import LanguageScreen from '../screens/Languages';

export default createStackNavigator(
	{
		Language: {
			screen: LanguageScreen
		}
	},
	{
		headerMode: 'none'
	}
);
