import React from 'react';
import App from './src';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store';
export default () => (
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>
);
