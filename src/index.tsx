import { setConfig } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import { Provider, ReactReduxContext } from 'react-redux';
import configureStore from './redux-setup/store';
import HotApp from './client/entry/app';

const history = createBrowserHistory();
const store = configureStore({}, history);
setConfig({
    showReactDomPatchNotification: false
});

const render = () => {
    ReactDOM.render(
        <Provider store={store} context={ReactReduxContext}>
            <HotApp history={history} context={ReactReduxContext} />
        </Provider>,
        document.getElementById('root'));
};

render();