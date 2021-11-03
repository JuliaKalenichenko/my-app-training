import {Component, StrictMode} from "react";
import './App.css';

/* const Header = () => {
    return <h2>Hello World!</h2>
}

/* const Field = () => {
    const holder = 'Enter here';
    const styleField = {
        width: '300px'
    };
    return <input
        placeholder={holder}
        type="text"
        style={styleField}/>
}
 */

/* class Field extends Component {
    render () {
        const holder = 'Enter here';
        const styleField = {
            width: '300px'
        };

        return <input
            placeholder={holder}
            type="text"
            style={styleField}/>
    }
}


function Btn() {
   const text = 'Log in';
/*
    const res = () => {
        return 'Log in';
    }
    const p =<p>Log in</p>
 */
   /*  const logged = true;

 return <button>{logged ? 'Enter' : text}</button>;
}

function App() {
  return (
      <div className="App">
        <StrictMode>
            <Header/>
        </StrictMode>
        <Field/>
        <Btn/>
    </div>
  );
}
    */
// export {Header};

// Свойства компонентов //

// Props - object

function WhoAml ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name.firstName}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <WhoAml name="John" surname="Smith" link="facebook.com"/>
            <WhoAml name={{firstName: 'Alex'}} surname="Shepard" link="vk.com"/>
        </div>
    );
}
//  {name()}
// <WhoAml name={() => {return 'Julia'}} surname="Kalenichenko" link="vk.com"/>

export default App;