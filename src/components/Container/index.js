import React from 'react';
import { SafeAreaView } from 'react-native';

const Container = ({ children, containerStyles = {} }) => (
	<SafeAreaView style={containerStyles}>{children}</SafeAreaView>
);

export default Container;
