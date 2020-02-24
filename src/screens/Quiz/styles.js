import { StyleSheet } from 'react-native';
import {
	responsiveWidth,
	responsiveHeight,
	DEVICE_WIDTH
} from '../../utils/responsivePixel';

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
		fontSize: responsiveHeight(2),
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
		marginVertical: responsiveHeight(1.2)
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: DEVICE_WIDTH * 0.7,
		justifyContent: 'space-evenly'
	},
	nextButton: {
		backgroundColor: '#000',
		width: responsiveWidth(30),
		alignItems: 'center',
		paddingVertical: responsiveHeight(1.5),
		borderRadius: responsiveHeight(0.5),
		marginTop: responsiveHeight(5)
	},
	nextButtonTitle: {
		color: '#fff',
		fontSize: responsiveHeight(2)
	}
});
