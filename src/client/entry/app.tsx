import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { ReactReduxContextValue } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CookiesProvider } from 'react-cookie';
import CookiedApp from './cookiedApp';

interface AppProps {
    history: History,
    context: React.Context<ReactReduxContextValue>
}

class HotApp extends React.Component<AppProps, {}>{
    render = () => <ConnectedRouter history={this.props.history} context={this.props.context}>
        <CookiesProvider>
            <CookiedApp history={this.props.history} />
        </CookiesProvider>
    </ConnectedRouter>;
}

export default hot(HotApp);