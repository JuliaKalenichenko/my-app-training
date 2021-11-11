import {Component } from "react";
import './App.css';
import styled from "styled-components";

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

const EmptItem = styled.div`
    
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 20px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;



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
            <EmptItem active>
                <Button onClick={this.nextYear}>+++</Button>
                <Header>My name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            </EmptItem>
        )
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

function App() {
    return (
        <Wrapper>
            <WhoAml name="John" surname="Smith" link="facebook.com"/>
            <WhoAml name="Alex" surname="Shepard" link="vk.com"/>
        </Wrapper>
    );
}
//  {name()}
// <WhoAml name={() => {return 'Julia'}} surname="Kalenichenko" link="vk.com"/>
// <WhoAml name={{firstName: 'Alex'}} surname="Shepard" link="vk.com"/>
export default App;
