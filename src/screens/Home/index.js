import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';
import Container from '../../components/Container';
import data from '../../data/chat';
import ChatComponent from '../../components/chat';
import Background from '../../../assets/chat.jpg';
const Home = ({ navigation }) => {
	const {
		language = 'english'
	} = navigation.dangerouslyGetParent().state.params;
	const [messages, setMessages] = useState(data[language]);
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
			<ImageBackground
				source={Background}
				style={{ flex: 1, width: '100%', width: '100%' }}>
				<ChatComponent
					data={messages}
					onSend={_sendMessage}
					message={text}
					onChangeMessage={setText}
				/>
			</ImageBackground>
		</Container>
	);
};

export default Home;
