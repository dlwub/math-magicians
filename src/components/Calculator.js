import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

handleClick = (e) => {
  this.setState((prevState) => calculate(prevState, e.target.textContent));
};

render() {
  const { total, next, operation } = this.state;
  return (
    <div className="button-container">
      <Button value={next || operation || total || 0} className="btn row1" />
      <Button value="AC" className="btn" handleClick={this.handleClick} />
      <Button value="+/-" className="btn" handleClick={this.handleClick} />
      <Button value="%" className="btn" handleClick={this.handleClick} />
      <Button value="÷" className="btn orange" handleClick={this.handleClick} />
      <Button value={7} className="btn" handleClick={this.handleClick} />
      <Button value={8} className="btn" handleClick={this.handleClick} />
      <Button value={9} className="btn" handleClick={this.handleClick} />
      <Button value="x" className="btn orange" handleClick={this.handleClick} />
      <Button value={4} className="btn" handleClick={this.handleClick} />
      <Button value={5} className="btn" handleClick={this.handleClick} />
      <Button value={6} className="btn" handleClick={this.handleClick} />
      <Button value="-" className="btn orange" handleClick={this.handleClick} />
      <Button value={1} className="btn" handleClick={this.handleClick} />
      <Button value={2} className="btn" handleClick={this.handleClick} />
      <Button value={3} className="btn" handleClick={this.handleClick} />
      <Button value="+" className="btn orange" handleClick={this.handleClick} />
      <Button value={0} className="btn col2" handleClick={this.handleClick} />
      <Button value="." className="btn" handleClick={this.handleClick} />
      <Button value="=" className="btn orange" handleClick={this.handleClick} />
    </div>
  );
}
}
