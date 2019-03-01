import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './prelogin/Login';
import Consts from '../helpers/consts';

export default class App extends React.Component<{}>{
    render = () => <Switch>
        <Route path={Consts.CatchAllUrl} component={Login} />
    </Switch>;
}