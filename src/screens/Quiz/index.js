import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Title, ProgressBar, useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { Transitioning, Transition } from 'react-native-reanimated';

import { fetchQuiz, setNextQuestion } from '../../store/actions/test.actions';
import styles from './styles';
import AnswerComponent from './components/Answer';
import responses from './responses';
const QuizScreen = ({
	navigation,
	fetchData,
	isFetching,
	questions,
	questionNumber,
	nextQuestion,
	...props
}) => {
	const transition = (
		<Transition.Together>
			<Transition.Change interpolation='easeIn' durationMs={500} />
			<Transition.In type='fade' durationMs={500} />
		</Transition.Together>
	);
	const ref = useRef();
	const { colors } = useTheme();
	const [pickedId, setPicked] = useState(null);
	//mark picked answer
	const _onPickAnswer = id => {
		if (pickedId === id) {
			return setPicked(null);
		}
		setPicked(id);
	};
	const handlePrevQuestion = () => {
		const nextQuestionId = questionNumber - 1;
		if (nextQuestionId >= 0) {
			nextQuestion(nextQuestionId);
		}
	};
	const handleNextQuestion = () => {
		const nextQuestionId = questionNumber + 1;
		if (nextQuestionId < props.count) {
			ref.current.animateNextTransition();
			nextQuestion(nextQuestionId);
		}
	};
	//clean selection
	useEffect(() => {
		setPicked(null);
	}, [questionNumber]);
	//fetch endpoint
	useEffect(() => {
		const { quizId } = navigation.state.params;
		fetchData(quizId);
	}, []);
	if (isFetching) {
		return <ProgressBar indeterminate color={colors.accent} />;
	}
	return (
		<Transitioning.View style={{ flex: 1 }} ref={ref} transition={transition}>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.header}>
					<Title style={styles.title}>
						Question {questionNumber + 1}/{props.count}
					</Title>
				</View>

				<Text style={styles.question}>
					{questions[questionNumber]?.content}
				</Text>
				<View style={styles.answersContainer}>
					{Object.values(responses).map(item => (
						<TouchableOpacity
							key={item.id}
							onPress={() => _onPickAnswer(item.id)}
							style={styles.answerContainer}>
							<AnswerComponent
								answer={item.answer}
								checked={item.id === pickedId}
							/>
						</TouchableOpacity>
					))}
				</View>
				<View style={styles.buttonsContainer}>
					{questionNumber > 0 && (
						<TouchableOpacity
							style={[styles.nextButton, { backgroundColor: colors.accent }]}
							onPress={handlePrevQuestion}>
							<Text style={styles.nextButtonTitle}>Prev</Text>
						</TouchableOpacity>
					)}
					<TouchableOpacity
						style={[
							styles.nextButton,
							{ backgroundColor: pickedId ? '#000' : '#6c757d' }
						]}
						onPress={handleNextQuestion}
						disabled={pickedId ? false : true}>
						<Text style={styles.nextButtonTitle}>
							{props.count === questionNumber + 1 ? 'Submit' : 'Next'}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</Transitioning.View>
	);
};

const mapStateToProps = ({ quiz }) => ({
	...quiz
});
export default connect(mapStateToProps, {
	fetchData: fetchQuiz,
	nextQuestion: setNextQuestion
})(QuizScreen);
