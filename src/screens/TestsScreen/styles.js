import { StyleSheet } from 'react-native';
import { responsiveHeight, DEVICE_WIDTH } from '../../utils/responsivePixel';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	searchContainer: {
		marginHorizontal: responsiveHeight(0.5),
		marginBottom: responsiveHeight(1),
		backgroundColor: 'transparent',
		borderBottomColor: '#ccc',
		borderBottomWidth: StyleSheet.hairlineWidth * 2
	},
	listContainer: {
		marginTop: responsiveHeight(1)
	}
});
