import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import App from './client/App';
declare let module: any;

ReactDOM.render(<Container><App /></Container>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}