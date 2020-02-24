import axios from 'axios';
import {
	FETCH_ALL_TESTS,
	FETCH_ALL_TESTS_COMPLETE,
	FETCH_ONE_TEST,
	FETCH_ONE_TEST_COMPLETE,
	SET_NEXT_QUESTION
} from '../types';
const TEST_BASE_URL = 'https://mhsat-api.herokuapp.com/api/v1';
export const fetchTests = () => async dispatch => {
	dispatch({
		type: FETCH_ALL_TESTS
	});
	let response;
	try {
		const {
			data: { Tests }
		} = await axios.get(`${TEST_BASE_URL}/tests`);
		response = Tests.reduce((prev, current) => {
			return {
				[`test-${current.id}`]: current,
				...prev
			};
		}, {});
	} catch (error) {
		console.log(error);
	} finally {
		if (response) {
			dispatch({
				type: FETCH_ALL_TESTS_COMPLETE,
				payload: response
			});
		}
	}
};

export const fetchQuiz = id => async dispatch => {
	dispatch({
		type: FETCH_ONE_TEST
	});
	let data;
	try {
		({ data } = await axios.get(`${TEST_BASE_URL}/tests/${id}`));
	} catch (error) {
		console.log(error);
	} finally {
		if (data) {
			dispatch({
				type: FETCH_ONE_TEST_COMPLETE,
				payload: data
			});
		}
	}
};

export const setNextQuestion = value => ({
	type: SET_NEXT_QUESTION,
	payload: value
});
