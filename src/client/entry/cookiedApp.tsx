import * as React from 'react';
import { History } from "history";
import { Switch, Route } from 'react-router';
import Consts from '../../helpers/consts';
import Login from '../login/login';
import { withCookies, Cookies } from 'react-cookie';

interface CookiedAppProps {
    history: History,
    cookies?: Cookies
}

class CookiedApp extends React.Component<CookiedAppProps, {}>{
    render = () => <Switch>
        <Route exact path={Consts.RootUrl} render={() => <Login {...this.props}/>} />
        <Route render={() => <Login {...this.props}/>} />
    </Switch>;
}

export default withCookies(CookiedApp);