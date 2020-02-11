import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight } from '../../../utils/responsivePixel';
const { width: DEVICE_WIDTH } = Dimensions.get('window');
export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginBottom: 10
	},
	card: {
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#ccc',
		padding: 10,
		maxWidth: DEVICE_WIDTH * 0.6,
		borderRadius: responsiveHeight(1.5)
	},
	avatar: {
		alignSelf: 'flex-end',
		margin: 5
	}
});
