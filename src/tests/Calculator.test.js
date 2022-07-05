import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  it('Should add numbers and return sum', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })
  it('Should subtract numbers and return sum', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSub = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7);
    fireEvent.click(buttonSub);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })
  it('Should multiply numbers and return totla', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMulti = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3);
    fireEvent.click(buttonMulti);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })
  it('Should concatenate numbers', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7);
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('74');
  })
  it('Should divide numbers and return sum', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDiv = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDiv);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })
  it('Should chain operations and return sum', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDiv = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const buttonSub = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDiv);
    fireEvent.click(button7);
    fireEvent.click(buttonSub);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('2');
  })
  it('Should clear running total without affecting calculation', () => {
    
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
   
    const buttonEquals = container.getByTestId('operator-equals');
    const buttonSub = container.getByTestId('operator-subtract');
    const buttonClear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7);
    fireEvent.click(buttonSub);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonSub);
    fireEvent.click(button7);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonSub);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })
})

