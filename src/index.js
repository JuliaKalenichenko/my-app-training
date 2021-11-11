import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from "./App";
import BootsrapTest from "./Bootstrap-Test";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Header} from "./App";
// import App from './Value-counter';

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

// Изменили экспортные стили.
const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

ReactDOM.render(
 <StrictMode>
    <App/>
     <BigButton as="a">Отправить отчет</BigButton>
     <BootsrapTest/>
 </StrictMode>,
document.getElementById('root')
);



