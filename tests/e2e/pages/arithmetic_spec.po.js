'use strict';

let firstInput,
secondInput, submit, result;

module.exports = {
  init: () => {
    firstInput = element(by.model('first'));
    secondInput = element(by.model('second'));
    submit = element(by.id('gobutton'));
    result = element(by.css('h2'));

  },
  get: (string) => {
    return browser.get(string);
  },
  setFirstInput: (input) => {
     return firstInput.sendKeys(input);
  },
  setSecondInput: (input) => {
    return secondInput.sendKeys(input);
  },
  onSubmit: () => {
	  submit.click();
  },
  getResult: () => {
    return result.getText();
  }
}