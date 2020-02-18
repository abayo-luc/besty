import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from '../../utils/responsivePixel';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginHorizontal: responsiveWidth(2)
	},
	header: {
		marginVertical: responsiveHeight(4)
	},
	question: {
		fontSize: responsiveHeight(3),
		margin: responsiveWidth(3),
		textAlign: 'center'
	},
	answersContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		marginTop: responsiveHeight(4)
	},
	answerContainer: {
		marginVertical: responsiveHeight(1.5)
	},
	nextButton: {
		backgroundColor: '#000',
		paddingHorizontal: responsiveHeight(5),
		paddingVertical: responsiveHeight(2),
		borderRadius: responsiveHeight(4.5) / 1.5,
		marginTop: responsiveHeight(5)
	},
	nextButtonTitle: {
		color: '#fff',
		fontSize: responsiveHeight(3)
	}
});
