import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight } from '../../../utils/reponsivePixel';
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
export default StyleSheet.create({
	container: {
		alignSelf: 'center',
		justifyContent: 'center',
		padding: 10,
		width: DEVICE_WIDTH
	},
	textInput: {
		width: '100%',
		minHeight: responsiveHeight(5),
		maxHeight: DEVICE_HEIGHT * 0.3,
		paddingHorizontal: 10,
		borderColor: 'transparent',
		borderWidth: 0,
		borderColor: '#ccc',
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: responsiveHeight(3),
		width: DEVICE_WIDTH * 0.93
	}
});
