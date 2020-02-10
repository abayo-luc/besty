import React from 'react';
import { TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';
const MessageComposer = ({ onChange, value, ...props }) => {
	return (
		<Card style={styles.container} elevation={1}>
			<TextInput
				style={[styles.textInput]}
				numberOfLines={5}
				multiline={true}
				onChange={onChange}
				value={value}
				enablesReturnKeyAutomatically
				accessible
				keyboardAppearance='dark'
				underlineColorAndroid='transparent'
				numberOfLines={1}
				{...props}
			/>
		</Card>
	);
};

export default MessageComposer;
