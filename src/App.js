import {Component } from "react";
import './App.css';

/** Свойства компонентов **

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
            <>
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
            </>
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
