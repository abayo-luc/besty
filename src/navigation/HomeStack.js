import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import QuizScreen from '../screens/Quiz';
export default createStackNavigator({
	Home: HomeScreen,
	Quiz: QuizScreen
});
