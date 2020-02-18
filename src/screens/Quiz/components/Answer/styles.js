import { StyleSheet } from 'react-native';
import {
	responsiveHeight,
	DEVICE_WIDTH,
	responsiveWidth
} from '../../../../utils/responsivePixel';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: StyleSheet.hairlineWidth * 6,
		width: DEVICE_WIDTH * 0.7,
		height: responsiveHeight(7),
		paddingHorizontal: responsiveWidth(2),
		borderRadius: responsiveHeight(4.5) / 2
	},
	markedContainer: {
		height: responsiveWidth(5),
		width: responsiveWidth(5),
		borderRadius: responsiveWidth(2.5),
		borderWidth: StyleSheet.hairlineWidth * 5
	}
});
