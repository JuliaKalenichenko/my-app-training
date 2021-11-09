

/** Value counter **/
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
// export default App;