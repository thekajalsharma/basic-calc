import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import CalcForm from './CalcForm';
import Result from './Result';

class App extends Component {
  constructor() {
    super();
    this.state = {
      calc_details: {}
    };
    this.calculate = this.calculate.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(operand1, operand2, operator) {
    const calc_details = { ...this.state.calc_details };
    const result = this.calculate(operand1, operand2, operator);
    console.log(result);
    calc_details.operand1 = operand1;
    calc_details.operand2 = operand2;
    calc_details.operator = operator;
    calc_details.result = result;
    console.log(calc_details.result);
    this.setState({ calc_details: calc_details });
  }

  calculate(operand1str, operand2str, operator) {
    console.log("in calculate");
    const operand1 = parseInt(operand1str);
    const operand2 = parseInt(operand2str);

    if (operator === '+') {
      return operand1 + operand2;
    }
    if (operator === '-') {
      return operand1 - operand2;
    }
    if (operator === '*') {
      return operand1 * operand2;
    }
    if (operator === '/') {
      return operand1 / operand2;
    }
    return 0;
  }

  render() {
    return (
      <div className="App">
        <CalcForm updateState={this.updateState} />
        <Result result={this.state.calc_details.result} />
      </div >
    );
  }
}

export default App;
