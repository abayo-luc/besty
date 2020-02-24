import { FETCH_ALL_TESTS, FETCH_ALL_TESTS_COMPLETE } from '../types';
const INITIAL_STATE = {
	isFetching: true,
	tests: {},
	currentTest: null
};

export default (state = INITIAL_STATE, { payload, type }) => {
	switch (type) {
		case FETCH_ALL_TESTS:
			return {
				...state,
				isFetching: true
			};
		case FETCH_ALL_TESTS_COMPLETE:
			return {
				...state,
				isFetching: false,
				tests: {
					...state.tests,
					...payload
				}
			};
		default:
			return state;
	}
};
