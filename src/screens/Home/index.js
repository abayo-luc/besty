import React, { useState } from 'react';
import styles from './styles';
import Container from '../../components/Container';
import data from '../../data/chat';
import ChatComponent from '../../components/chat';

const Home = () => {
	const [messages, setMessages] = useState(data);
	const [text, setText] = useState('');
	const _sendMessage = () => {
		if (!text) return;
		const newMessage = {
			id: `txt-${new Date()}`,
			message: text.trim(),
			_nodeId: 1,
			trigger: messages.length + 2
		};
		setMessages([newMessage, ...messages]);
		setText('');
	};
	return (
		<Container containerStyles={styles.container}>
			<ChatComponent
				data={messages}
				onSend={_sendMessage}
				message={text}
				onChangeMessage={setText}
			/>
		</Container>
	);
};

export default Home;
