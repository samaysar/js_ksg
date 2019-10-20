import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import App from './client/App';

const render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Container>
                <App />
            </Container>
        </BrowserRouter>,
        document.getElementById('root'));
}

render();