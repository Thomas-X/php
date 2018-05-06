import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export const reduxPersistRootKey = 'root-persist';

export const persistConfig = {
    key: reduxPersistRootKey,
    storage: storage,
    blacklist: ['lareact']
};

const configureStore = (initialState) => {
    const allReducers = persistReducer(persistConfig, rootReducer);


    const store = createStore(
        allReducers,
        initialState,
        compose(
            applyMiddleware(
                thunk,
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (f) => f,
        ),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./index', () => {
            const nextRootReducer = require('./index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return {store};
};

export default configureStore;