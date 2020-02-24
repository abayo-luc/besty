import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from './reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['tests']
};

const middleware = [ReduxThunk];
const persistedReducers = persistReducer(persistConfig, reducers);
export const store = createStore(
	persistedReducers,
	applyMiddleware(...middleware)
);

export const persistors = persistStore(store);

export default store;
