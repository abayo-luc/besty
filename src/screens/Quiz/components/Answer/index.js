import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import CheckIcon from '../../../../../assets/check.png';
import styles from './styles';
const AnswerComponent = ({ checked }) => {
	const { colors } = useTheme();
	return (
		<View style={[styles.container, { borderColor: colors.black }]}>
			<Text>hello Answer</Text>
			{checked ? (
				<Image source={CheckIcon} style={styles.markedContainer} />
			) : (
				<View style={styles.markedContainer} />
			)}
		</View>
	);
};

export default AnswerComponent;
