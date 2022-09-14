import React from 'react';
import Button from './Button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="button-container">
        <Button value={0} className="btn row1" />
        <Button value="A/C" className="btn" />
        <Button value="+/-" className="btn" />
        <Button value="%" className="btn" />
        <Button value="÷" className="btn orange" />
        <Button value={7} className="btn" />
        <Button value={8} className="btn" />
        <Button value={9} className="btn" />
        <Button value="×" className="btn orange" />
        <Button value={4} className="btn" />
        <Button value={5} className="btn" />
        <Button value={6} className="btn" />
        <Button value="-" className="btn orange" />
        <Button value={1} className="btn" />
        <Button value={2} className="btn" />
        <Button value={3} className="btn" />
        <Button value="+" className="btn orange" />
        <Button value={0} className="btn col2" />
        <Button value="." className="btn" />
        <Button value="=" className="btn orange" />

      </div>
    );
  }
}
