import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const Icon = ({ name, color = '#000', ...props }) => (
	<Ionicons name={name} size={25} color={color} {...props} />
);
Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string
};

export default Icon;
