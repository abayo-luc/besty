import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import QuizScreen from '../screens/Quiz';
import TestsScreen from '../screens/TestsScreen';
export default createStackNavigator({
	Home: HomeScreen,
	Tests: {
		screen: TestsScreen,
		navigationOptions: () => ({
			title: 'Self-help Tests',
			headerBackTitle: 'Back'
		})
	},
	Quiz: {
		screen: QuizScreen,
		navigationOptions: () => ({
			headerBackTitle: 'Back'
		})
	}
});
