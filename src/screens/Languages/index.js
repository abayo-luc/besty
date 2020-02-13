import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { SwitchActions } from 'react-navigation';
import Container from '../../components/Container';
import LanguageCard from './components/LanguageCard';
import styles from './styles';
import Logo from '../../../assets/logo.png';
import { Caption, Text } from 'react-native-paper';
const LanguageScreen = () => {
	const { navigate } = useNavigation();
	const [lang, setLang] = useState(null);
	const _handleSetLang = value => {
		setLang(value);
		navigate('Main', { language: value });
	};
	return (
		<Container containerStyles={styles.container}>
			<Image source={Logo} style={styles.logoIcon} resizeMode='contain' />
			<View style={styles.content}>
				<Text style={styles.text}>Choose Language:</Text>
				<TouchableOpacity onPress={() => _handleSetLang('kinyarwanda')}>
					<LanguageCard language='Kinyarwanda' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => _handleSetLang('english')}>
					<LanguageCard language='English' />
				</TouchableOpacity>
			</View>
			<View style={styles.footer}>
				<Caption>Besty, your mental fitness partner!</Caption>
			</View>
		</Container>
	);
};

export default LanguageScreen;
