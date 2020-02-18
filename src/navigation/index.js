import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './HomeStack';
import Onboard from './OnboardStack';
export default createAppContainer(
	createSwitchNavigator(
		{
			Onboard,
			Main
		},
		{
			initialRouteName: 'Onboard'
		}
	)
);
