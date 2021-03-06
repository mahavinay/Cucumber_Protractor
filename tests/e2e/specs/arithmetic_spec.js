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
	//console.log(specPage.getResult());
	expect(specPage.getResult()).to.eventually.equal(result);
  });

// Negative test

  /*Then('the user enters {string} in the first input', function (str1) {
	  specPage.setFirstInput(str1)
  });

  Then('he selects {string} operator', function (operator1) {
		element(by.model('operator')).click();
			element.all(by.css("option")).each(function(item) {
					 item.getText().then(function(text) {
						if(text == operator1) {
							item.click();
						}
					})
				})	
	  });


  Then('the user enters {string} in the second input', function (str2) {
	  specPage.setSecondInput(str2);
	  specPage.onSubmit();
  });  

  Then('the result should be {string}', function (result1) {
		//console.log(specPage.getResult());
		expect(specPage.getResult()).to.eventually.equal(result1);
	  });*/