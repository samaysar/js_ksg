import * as React from 'react';

interface LoginProps{
    from: any
}

export default class Login extends React.Component<LoginProps, {}>{
    render = () => {
        const val = JSON.stringify(this.props.from);
        console.log(val);
        return <div>HELLO - {val}</div>;
    }
}