import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';
import { Paragraph, Card } from 'react-native-paper';

const ChatText = ({ nodeId = 0, message }) => {
	const containerStyles = [styles.container];
	const cardStyles = [styles.card];
	const textStyles = [];
	if (nodeId) {
		containerStyles.push({
			justifyContent: 'flex-end'
		});
		cardStyles.push({ backgroundColor: 'rgb(51, 54, 93)' });
		textStyles.push({ color: '#fff' });
	}

	return (
		<View style={containerStyles}>
			<Card style={cardStyles} elevation={1}>
				<Paragraph style={textStyles}>{message}</Paragraph>
			</Card>
		</View>
	);
};

ChatText.propTypes = {
	nodeId: PropTypes.number,
	message: PropTypes.string.isRequired
};
ChatText.defaultProps = {
	nodeId: 0
};
export default ChatText;
