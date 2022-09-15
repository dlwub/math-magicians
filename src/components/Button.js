import React from 'react';
import '../index.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, className, handleClick } = this.props;

    return (
      <button type="button" className={className} onClick={handleClick}>
        {value}
      </button>
    );
  }
}
