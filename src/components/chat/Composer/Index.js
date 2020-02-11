import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Card, useTheme } from 'react-native-paper';
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from '../../Icon';
import styles from './styles';
const MessageComposer = ({
	onChangeText,
	message = '',
	onSend,
	placeholder,
	...props
}) => {
	const iconRef = useRef();
	const { colors } = useTheme();
	const transition = <Transition.Change interpolation='easeIn' />;
	useEffect(() => {
		if (message.length === 1) {
			iconRef.current.animateNextTransition();
		}
	}, [message]);
	return (
		<Card
			style={[styles.card, { backgroundColor: colors.secondary }]}
			elevation={1}>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={[styles.textInput]}
						numberOfLines={5}
						multiline={true}
						onChangeText={onChangeText}
						value={message}
						enablesReturnKeyAutomatically
						accessible
						keyboardAppearance='dark'
						underlineColorAndroid='transparent'
						numberOfLines={1}
						placeholder={placeholder}
						{...props}
					/>
				</View>
				<Transitioning.View transition={transition} ref={iconRef}>
					{message.length ? (
						<TouchableOpacity onPress={onSend}>
							<View style={[styles.icon, { backgroundColor: colors.accent }]}>
								<Icon name='send' color={colors.primary} size={22} />
							</View>
						</TouchableOpacity>
					) : null}
				</Transitioning.View>
			</View>
		</Card>
	);
};

MessageComposer.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
	onSend: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};
MessageComposer.defaultProps = {
	placeholder: 'Type your message ...'
};
export default MessageComposer;
