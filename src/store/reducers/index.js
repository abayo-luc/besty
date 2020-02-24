import { combineReducers } from 'redux';
import TestsReducers from './tests.reducers';
import QuizReducers from './quiz.reducers';
export default combineReducers({
	tests: TestsReducers,
	quiz: QuizReducers
});
