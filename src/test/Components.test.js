import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';
import Calculator from '../components/Calculator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Quote from '../pages/Quote';
import CalculatorPage from '../pages/CalculatorPage';

describe('Components', () => {
  it('Button should match snapshot when empty', () => {
    const button = renderer
      .create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Button should match snapshot when values passed in', () => {
    const value = '7';
    const className = 'btn';
    const button = renderer
      .create(<Button value={value} className={className} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Calculator should match snapshot', () => {
    const calculator = renderer
      .create(<Calculator />).toJSON();
    expect(calculator).toMatchSnapshot();
  });

  it('Navbar should match snapshot', () => {
    <Router>
      const navbar = renderer
      .create(
      <Navbar />
      ).toJSON();
      expect(navbar).toMatchSnapshot();
    </Router>;
  });

  it('Home snapshot should match', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('Quote snapshot should match', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });

  it('CalculatorPage snapshot should match', () => {
    const calculatorpage = renderer.create(<CalculatorPage />).toJSON();
    expect(calculatorpage).toMatchSnapshot();
  });

  it('Footer snapshot should match', () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
