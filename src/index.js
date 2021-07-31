import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

//create a react element with buit in function
//const element = React.createElement('h1', null, 'Hello React')


// class Clock2 extends React.Component {
//     render() {
//         return (
//             <h1>{this.props.children} {new Date().toLocaleDateString(this.props.locale)}</h1>
//         );
//     }
// }

// const clockObj = new Clock2();
ReactDOM.render(
    <div>
        <App />
        
    </div>,
    document.getElementById("root")
);
//ReactDom.render(<Clock2 locale="en-BD" />, document.getElementById("root2"));