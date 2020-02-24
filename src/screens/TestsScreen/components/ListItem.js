import React from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native';
import { Text, Caption } from 'react-native-paper';
import { DEVICE_WIDTH, responsiveHeight } from '../../../utils/responsivePixel';
import Icon from '../../../components/Icon';
const styles = StyleSheet.create({
	container: {
		borderBottomWidth: StyleSheet.hairlineWidth * 2,
		borderColor: '#ccc',
		width: DEVICE_WIDTH,
		paddingVertical: responsiveHeight(1),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: responsiveHeight(0.5),
		marginBottom: responsiveHeight(0.5)
	},
	content: {
		paddingLeft: responsiveHeight(0.5)
	},
	iconButton: {
		padding: responsiveHeight(0.5)
	}
});
const ListItem = ({ onNavigate, category, title }) => (
	<TouchableWithoutFeedback onPress={onNavigate}>
		<View style={styles.container}>
			<View style={styles.content}>
				<Text>{category}</Text>
				<Caption lineBreakMode={1}>{title}</Caption>
			</View>
			<View>
				<TouchableOpacity onPress={onNavigate} style={styles.iconButton}>
					<Icon name='arrow-forward' size={25} />
				</TouchableOpacity>
			</View>
		</View>
	</TouchableWithoutFeedback>
);
export default ListItem;
