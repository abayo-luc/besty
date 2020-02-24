import {
	FETCH_ONE_TEST_COMPLETE,
	FETCH_ONE_TEST,
	SET_NEXT_QUESTION
} from '../types';

const INITIAL_STATE = {
	isFetching: false,
	questionNumber: 0,
	test: {},
	count: null,
	questions: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case FETCH_ONE_TEST:
			return {
				...state,
				isFetching: true
			};
		case FETCH_ONE_TEST_COMPLETE:
			return {
				...state,
				isFetching: false,
				...payload
			};
		case SET_NEXT_QUESTION:
			return {
				...state,
				questionNumber: payload
			};
		default:
			return state;
	}
};
