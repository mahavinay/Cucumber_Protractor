let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
let specPage = require('../pages/arithmetic_spec.po.js');

Before(function(){
    specPage.init();
})

Given('the user lands on {string}', function (site) {
	specPage.get(site);
});

Then('the user enters {int} in the first input', function (firstInput) {
	specPage.setFirstInput(firstInput);
  });

Then('he selects {string} operator', function (operator) {
	element(by.model('operator')).click();
		element.all(by.css("option")).each(function(item) {
				 item.getText().then(function(text) {
					if(text == operator) {
						item.click();
					}
				})
			})	
  });

Then('the user enters {int} in the second input', function (secondInput) {
	specPage.setSecondInput(secondInput);
	specPage.onSubmit();
  });

Then('the result should be {string}', function (result) {
	expect(specPage.getResult()).to.eventually.equal(result);
  });