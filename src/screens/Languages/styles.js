import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from '../../utils/responsivePixel';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	text: {
		fontSize: responsiveHeight(2),
		marginVertical: 15
	},
	logoIcon: {
		width: responsiveWidth(60)
	},
	content: {
		alignItems: 'center'
	},
	footer: {
		paddingVertical: responsiveHeight(1)
	}
});
