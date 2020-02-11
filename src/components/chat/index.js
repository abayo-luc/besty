import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import MessageComposer from './Composer/Index';
import KeyboardAvoider from '../Container/KeyboardAvoider';
import ChatText from './ChatText/ChatText';
import styles from './styles';

const ChatTextComponent = ({ item, index, animated }) => {
	const ref = useRef(null);
	return (
		<ChatText
			message={item.message}
			nodeId={item._nodeId}
			index={index}
			animated={animated}
			key={item.id}
			ref={ref}
		/>
	);
};

ChatTextComponent.propTypes = {
	item: PropTypes.shape({
		message: PropTypes.string.isRequired,
		_nodeId: PropTypes.number.isRequired
	}).isRequired
};

const ChatComponent = ({ data, onChangeMessage, message, onSend }) => {
	[animated, setAnimate] = useState(false);
	const _handleOnChangeMessage = text => {
		setAnimate(true);
		onChangeMessage(text);
	};
	return (
		<KeyboardAvoider containerStyles={styles.content}>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={({ item, index }) => (
					<ChatTextComponent item={item} index={index} animated={animated} />
				)}
				inverted={-1}
			/>
			<MessageComposer
				onChangeText={_handleOnChangeMessage}
				message={message}
				onSend={onSend}
			/>
		</KeyboardAvoider>
	);
};

ChatComponent.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			_nodeId: PropTypes.number.isRequired
		})
	),
	onChangeMessage: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
	onSend: PropTypes.func.isRequired
};
export default ChatComponent;
