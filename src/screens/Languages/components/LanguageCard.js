import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Headline, useTheme } from 'react-native-paper';
import { responsiveHeight } from '../../../utils/responsivePixel';
const { width: DEVICE_WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		borderWidth: StyleSheet.hairlineWidth * 4,
		minWidth: DEVICE_WIDTH * 0.5,
		paddingVertical: responsiveHeight(2),
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: responsiveHeight(2)
	}
});
const LanguageCard = ({ language }) => {
	const { colors } = useTheme();
	return (
		<View style={[styles.container, { borderColor: colors.accent }]}>
			<Headline>{language}</Headline>
		</View>
	);
};
LanguageCard.propTypes = {
	language: PropTypes.string.isRequired
};
export default LanguageCard;
