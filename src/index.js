import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './navigation';
import theme from './theme';
export default () => (
	<PaperProvider theme={theme}>
		<Navigation />
	</PaperProvider>
);
