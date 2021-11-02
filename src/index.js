import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Header} from "./App";

/* const text = 'Hello World!';

const elem = (
    <div>
        <h2>Текст: {text}</h2>
        <input className="text" type="text"/>
        <label htmlFor=""></label>
        <button tabIndex="0">Click</button>
    </div>
);

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');
 */

ReactDOM.render(
 <StrictMode>
    <App/>
 </StrictMode>,
document.getElementById('root')
);



