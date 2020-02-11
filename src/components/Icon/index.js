import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const prefix = Platform.select({ ios: 'ios-', android: 'md-' });
const Icon = ({ name, color = '#000', size = 25, ...props }) => (
	<Ionicons name={prefix + name} size={size} color={color} {...props} />
);
Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number
};

export default Icon;
