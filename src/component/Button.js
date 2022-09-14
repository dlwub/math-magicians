import React from 'react';
import '../index.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, className } = this.props;
    return (
      <button type="button" className={className}>
        {value}
      </button>
    );
  }
}
