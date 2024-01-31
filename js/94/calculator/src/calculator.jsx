import { Component } from 'react';


export default class Calculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current: '0',
        total: null,
        operator: null,
      };
    }
  
    numberClicked = (number) => {
        this.setState((prevState) => ({
          current: prevState.current === '0' ? `${number}` : prevState.current + number,
        }));
      };
      
      operatorClicked = (o) => {
        this.setState({
          total: this.state.current,
          operator: o,
          current: '0',
        });
      };
      
      calculateResult = () => {
        const { total, current, operator } = this.state;
        if (!operator || total == null) return;
      
        const currentNum = +current;
        const totalNum = +total;
        let newTotal;
      
        switch (operator) {
          case '+':
            newTotal = totalNum + currentNum;
            break;
        case '-':
            newTotal = totalNum - currentNum;
            break;
        case '*':
            newTotal = totalNum * currentNum;
            break;
        case '/':
            newTotal = totalNum / currentNum;
            break;
          default:
            return;
        }
      
        this.setState({
          current: `${newTotal}`,
          operator: null,
          total: null,
        });
      };
  
    render() {
        const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
         const operatorArray = ['+', '-', '*', '/'];
        return (
        <div className="calculator-frame">
            <div className="calculator-container">
              <div className="display"> 
                <div className="prev-number"> {this.state.total}</div>
                {this.state.current}
              </div>
              <div>
                {numberArray.map((i) => (
                  <button  className="calculator-button" key={i} onClick={() => this.numberClicked(i)}>{i}</button>
                ))}
                {operatorArray.map((i) => (
                  <button className="calculator-button" key={i} onClick={() => this.operatorClicked(i)}>{i}</button>
                ))}
                <button className="calculator-button" onClick={this.calculateResult}>=</button>
              </div>
            </div>
        </div>
        );
    }
}
  
