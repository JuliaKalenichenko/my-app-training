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

/** Свойства компонентов **/

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

/**
  У Component может быть динамическое состоянии которое меняеться.
 Меняються как у function and class
 state - на прямую менять нельзя, только через method setState.
 setState - асинхронная операция.
 Если нужна точность то колбекфункция.
 Мы можем менять только те состояния обьекта которые нам нужны
 .. остальные остануться без изменений.
 THIS - экземпляр класса.
 При обычной function контекст вызова теряеться.

 Обработчики событий:
  Свойство у экземпляра = метод в классе -> привязываем метод
  Что бы this не терялся.
  this.nextYear = this.nextYear.bind(this);
 **/
class WhoAml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
    }
    // setState - вызывает перерисовку компонента
    nextYear = () => {

        // function return new object state
        this.setState(state => ({
          years: state.years + 1
        }))
    }
    // Обьект события
    commitInputChanges = (e, color) => {
      //  console.log(e.target.value);
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        // Анонимная =>  function
        // <button onClick={() => this.nextYear()}+++</button>
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
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


 /** Счетчик значений **/
/*
 class App extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 value: this.props.value || 0
 }
 }

 nextValue = () => {
 if (this.state.value < 50) {
 this.setState(state => ({
 value: state.value + 1
 }))
 }
 }

 decValue = () => {
 if (this.state.value > -50) {
 this.setState(state => ({
 value: state.value - 1
 }))
 }
 }

 rndValue = () => {
 this.setState ({
 value: +(Match.random() * (50 - -50) + -50).toFixed(0)
 })
 }


 resetValue = () => {
 this.setState ({
 value: this.props.value
 })
 }
 // Используйте только стрелочную форму методов
 // Почему? Подробный ответ будет в следующем уроке

 render() {

 const {value} = this.state;

 return (
 <div class="app">
 <div class="counter">{value}</div>
 <div class="controls">
 <button onClick={this.nextValue}>INC</button>
 <button onClick={this.decValue}>DEC</button>
 <button onClick={this.rndValue}>RND</button>
 <button onClick={this.resetValue}>RESET</button>
 </div>
 </div>
 )
 }
 }

 ReactDOM.render(<App value={0}/>, document.getElementById('app'));
 */