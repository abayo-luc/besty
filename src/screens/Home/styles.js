import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../utils/responsivePixel';
export default StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		flex: 1,
		marginTop: 10,
		marginHorizontal: 5,
		justifyContent: 'space-between'
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	headerNavigation: {
		flexDirection: 'row',
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'space-between'
	},
	navigationButton: {
		width: responsiveWidth(40),
		height: responsiveHeight(6),
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerIcon: {
		height: responsiveHeight(2.5),
		width: responsiveHeight(2.5),
		padding: responsiveHeight(1)
	},
	headerButtonContainer: {
		marginRight: responsiveHeight(1)
	},
	buttonTitle: {
		fontSize: responsiveHeight(2),
		fontWeight: 'bold',
		color: '#fff'
	},
	verticalSeparator: {
		borderColor: '#fff',
		borderRightWidth: StyleSheet.hairlineWidth * 3
	}
});
