import React from 'react';
import { SafeAreaView, View } from 'react-native';

const Container = ({ children, containerStyles = {} }) => (
	<View style={[containerStyles]} forceInset={{ top: 'never' }}>
		{children}
	</View>
);

export default Container;
