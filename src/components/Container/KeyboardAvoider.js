import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { responsiveHeight, DEVICE_HEIGHT } from '../../utils/responsivePixel';
const KeyboardAvoider = ({ children, containerStyles }) => (
	<KeyboardAvoidingView
		style={containerStyles}
		behavior={Platform.select({
			ios: 'padding',
			android: 'height'
		})}
		keyboardVerticalOffset={Platform.select({
			ios: DEVICE_HEIGHT * 0.088,
			android: responsiveHeight(11)
		})}>
		{children}
	</KeyboardAvoidingView>
);

export default KeyboardAvoider;
