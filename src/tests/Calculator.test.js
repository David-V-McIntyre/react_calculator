import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })



  it('should be able to add', () => {
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const button1 = container.find('#number1');
    const buttonEquals = container.find('#operator-equals');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })



it('should be able to subtract', () => {
  const button4 = container.find('#number4');
  const buttonMinus = container.find('#operator-subtract');
  const button7 = container.find('#number7');
  const buttonEquals = container.find('#operator-equals');
  button7.simulate('click');
  buttonMinus.simulate('click');
  button4.simulate('click');
  buttonEquals.simulate('click')
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('3');
})

it('should be able to multiply', () => {
  const button3 = container.find('#number3');
  const buttonMultiply = container.find('#operator-multiply');
  const button5 = container.find('#number5');
  const buttonEquals = container.find('#operator-equals');
  button3.simulate('click');
  buttonMultiply.simulate('click');
  button5.simulate('click');
  buttonEquals.simulate('click')
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('15');
})

it('should be able to divide', () => {
  const button2 = container.find('#number2');
  const button1 = container.find('#number1');
  const buttonDivide = container.find('#operator-divide');
  const button7 = container.find('#number7');
  const buttonEquals = container.find('#operator-equals');
  button2.simulate('click');
  button1.simulate('click');
  buttonDivide.simulate('click');
  button7.simulate('click');
  buttonEquals.simulate('click')
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('3');
})

it('should be able to concatenate numbers', () => {
  const button4 = container.find('#number4');
  button4.simulate('click');
  button4.simulate('click');
  button4.simulate('click');
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('444');
})

it('should be able to chain operations', () => {
  const button1 = container.find('#number1');
  const button2 = container.find('#number2');
  const buttonDivide = container.find('#operator-divide');
  const button7 = container.find('#number7');
  const button3 = container.find('#number3');
  const buttonMultiply = container.find('#operator-multiply');
  const button5 = container.find('#number5');
  const button4 = container.find('#number4');
  const buttonMinus = container.find('#operator-subtract');
  const buttonEquals = container.find('#operator-equals');
  const buttonAdd = container.find('#operator_add');
  button7.simulate('click');
  buttonMinus.simulate('click');
  button4.simulate('click');
  button1.simulate('click');
  buttonAdd.simulate('click');
  button4.simulate('click');
  buttonMultiply.simulate('click');
  button5.simulate('click');
  buttonEquals.simulate('click')
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('-150');
})


it('should be able to clear the running total without affecting the calculation', () => {
  const button4 = container.find('#number4');
  const buttonAdd = container.find('#operator_add');
  const button2 = container.find('#number2');
  const buttonEquals = container.find('#operator-equals')
  const buttonClear = container.find('#clear');
  button2.simulate('click');
  buttonAdd.simulate('click');
  button4.simulate('click');
  buttonEquals.simulate('click');
  buttonAdd.simulate('click');
  button2.simulate('click');
  buttonClear.simulate('click');
  buttonEquals.simulate('click');
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('6');
})

})







