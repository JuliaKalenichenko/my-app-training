import {Component} from "react";
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

/* function WhoAml ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name.firstName}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}
 */

// У Component может быть динамическое состоянии которое меняеться.
// Меняються как у function and class
// state - на прямую менять нельзя, только через method setState.
// setState - асинхронная операция.
// Если нужна точность то колбекфункция.
// Мы можем менять только те состояния обьекта которые нам нужны
// .. остальные остануться без изменений.

class WhoAml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }
    // setState - вызывает перерисовку компонента
    nextYear = () => {

        // function return new object state
        this.setState(state => ({
          years: state.years + 1
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}+</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <WhoAml name="John" surname="Smith" link="facebook.com"/>
            <WhoAml name="Alex" surname="Shepard" link="vk.com"/>
        </div>
    );
}
//  {name()}
// <WhoAml name={() => {return 'Julia'}} surname="Kalenichenko" link="vk.com"/>
// <WhoAml name={{firstName: 'Alex'}} surname="Shepard" link="vk.com"/>
export default App;