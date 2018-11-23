import packageJSON from '../package.json';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';
import { configureStore } from './store/configureStore';
import * as serviceWorker from './serviceWorker';

console.log (`${packageJSON.name} ${packageJSON.version}`);

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={null}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('root'));

serviceWorker.register();
