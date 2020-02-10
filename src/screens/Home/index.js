import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './styles';
import ChatText from '../../components/chat/ChatText/ChatText';
import MessageComposer from '../../components/chat/Composer/Index';
import Container from '../../components/Container';
import { responsiveHeight } from '../../utils/reponsivePixel';
const messages = [
	{
		nodeId: 0,
		id: 'm-0',
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
	},
	{
		nodeId: 1,
		id: 'm-1',
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
	},
	{
		nodeId: 0,
		id: 'm-2',
		message: 'Duis aute irure dolor in'
	}
];
const Home = () => {
	const [message, setMessage] = useState('');
	return (
		<Container containerStyles={styles.container}>
			<KeyboardAvoidingView
				style={styles.content}
				behavior={Platform.select({
					ios: 'padding',
					android: 'height'
				})}
				keyboardVerticalOffset={Platform.select({
					ios: responsiveHeight(9.8),
					android: responsiveHeight(11)
				})}>
				<ScrollView>
					{messages.map(item => (
						<ChatText
							message={item.message}
							nodeId={item.nodeId}
							key={item.id}
						/>
					))}
				</ScrollView>
				<MessageComposer onChange={setMessage} message={message} />
			</KeyboardAvoidingView>
		</Container>
	);
};

export default Home;
