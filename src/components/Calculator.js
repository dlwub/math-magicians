import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const handleClick = (e) => {
    setState((prevState) => calculate(prevState, e.target.textContent));
  };

  const { total, next, operation } = state;
  return (
    <div className="button-container">
      <Button value={next || operation || total || 0} className="btn row1" />
      <Button value="AC" className="btn" handleClick={handleClick} />
      <Button value="+/-" className="btn" handleClick={handleClick} />
      <Button value="%" className="btn" handleClick={handleClick} />
      <Button value="÷" className="btn orange" handleClick={handleClick} />
      <Button value={7} className="btn" handleClick={handleClick} />
      <Button value={8} className="btn" handleClick={handleClick} />
      <Button value={9} className="btn" handleClick={handleClick} />
      <Button value="x" className="btn orange" handleClick={handleClick} />
      <Button value={4} className="btn" handleClick={handleClick} />
      <Button value={5} className="btn" handleClick={handleClick} />
      <Button value={6} className="btn" handleClick={handleClick} />
      <Button value="-" className="btn orange" handleClick={handleClick} />
      <Button value={1} className="btn" handleClick={handleClick} />
      <Button value={2} className="btn" handleClick={handleClick} />
      <Button value={3} className="btn" handleClick={handleClick} />
      <Button value="+" className="btn orange" handleClick={handleClick} />
      <Button value={0} className="btn col2" handleClick={handleClick} />
      <Button value="." className="btn" handleClick={handleClick} />
      <Button value="=" className="btn orange" handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
