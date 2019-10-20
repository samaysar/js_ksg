import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Login from './prelogin/Login';
import Consts from '../helpers/consts';

class App extends React.Component<{}>{
    render = () => <Switch>
        <Route path={Consts.CatchAllUrl} component={Login} />
    </Switch>;
}

export default hot(module)(App);