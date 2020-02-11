import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight } from '../../../utils/responsivePixel';
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
export default StyleSheet.create({
	card: {
		padding: responsiveHeight(1.5),
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: responsiveHeight(3),
		borderColor: '#ccc',
		width: DEVICE_WIDTH * 0.95,
		alignSelf: 'center',
		marginBottom: responsiveHeight(2)
	},
	container: {
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	icon: {
		height: responsiveHeight(4),
		width: responsiveHeight(4),
		borderRadius: responsiveHeight(4 / 2),
		alignItems: 'center',
		justifyContent: 'center'
	},
	textInput: {
		borderColor: 'transparent',
		maxHeight: DEVICE_HEIGHT * 0.3,
		minHeight: responsiveHeight(4),
		borderWidth: 0,
		width: DEVICE_WIDTH * 0.845
	}
});
