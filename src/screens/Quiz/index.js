import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Title } from 'react-native-paper';
import styles from './styles';
import AnswerComponent from './components/Answer';
const data = [
	{
		id: 'answer-1',
		answer: 'Not at All'
	},
	{
		id: 'answer-2',
		answer: 'Rarely'
	},
	{
		id: 'answer-3',
		answer: 'Sometimes'
	},
	{
		id: 'answer-4',
		answer: 'Often'
	}
];
const QuizScreen = () => {
	const [answers, setAnswer] = useState(data);
	const _onPickAnswer = id => {
		const allAnswers = answers.map(item => {
			if (item.id !== id) {
				return { ...item, checked: false };
			}
			return { ...item, checked: true };
		});
		setAnswer(allAnswers);
	};
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.header}>
				<Title style={styles.title}>Question 1/10</Title>
			</View>

			<Text style={styles.question}>
				I feel run down and drained of physical or emotional energy.
			</Text>
			<View style={styles.answersContainer}>
				{answers.map(item => (
					<TouchableOpacity
						key={item.id}
						onPress={() => _onPickAnswer(item.id)}
						style={styles.answerContainer}>
						<AnswerComponent answer={item.answer} checked={item.checked} />
					</TouchableOpacity>
				))}
			</View>
			<TouchableOpacity
				style={styles.nextButton}
				onPress={() => console.log('NextNextNext')}>
				<Text style={styles.nextButtonTitle}>Next</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default QuizScreen;
