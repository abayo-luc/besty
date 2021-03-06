import { Dimensions, PixelRatio, Platform } from 'react-native';

const pxRatio = (size, value) => {
	const sizeFactor = (size * value) / 100;
	return PixelRatio.roundToNearestPixel(sizeFactor);
};
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get(
	'window'
);

export const isiPhoneX = () =>
	Platform.OS === 'ios' &&
	!Platform.isPad &&
	!Platform.isTVOS &&
	(DEVICE_HEIGHT === 812 ||
		DEVICE_WIDTH === 812 ||
		DEVICE_HEIGHT === 896 || DEVICE_HEIGHT === 896);

export const responsiveWidth = wd => pxRatio(DEVICE_WIDTH, parseFloat(wd));

export const responsiveHeight = ht => pxRatio(DEVICE_HEIGHT, parseFloat(ht));
