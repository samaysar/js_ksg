import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './fa/css/all.min.css';
import App from './client/App';
import { setConfig } from 'react-hot-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);
setConfig({
    showReactDomPatchNotification: false
});

const render = (Compo: React.ComponentClass) => {
    ReactDOM.render(
        <BrowserRouter>
            <Compo />
            <FontAwesomeIcon icon={["fab", "react"]}  size='10x' spin color='rgb(59, 91, 152)'/>
            <FontAwesomeIcon icon="coffee" size='10x' spin/>
        </BrowserRouter>,
        document.getElementById('root'));
}

render(App);