 let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
let specPage = require('../pages/arithmetic_spec.po.js');

Before(function(){
    specPage.init();
    
})

 Given('the landing page {string}', function (string1) {
	 specPage.get(string1)
	 //return string1;
         });

Then('the user enters {string} in the first input', function (first_string) {
	 specPage.setFirstInput(first_string)
	 //return first_string;
  });
      
Then('he selects the {string} operator', function (opr) {
	element(by.model('operator')).click();
	element.all(by.css("option")).each(function(item) {
			 item.getText().then(function(text) {
				if(text == opr) {
					item.click();
				}
			})
		})	
		//return opr;
  });


  
         Then('the user enters {string} in the second input field', function (second_string) {
        	 specPage.setSecondInput(second_string);
        		specPage.onSubmit();
        		//return second_string;
         });
         
         Then('the result should be a string {string}', function (res_str) {
        		//console.log(specPage.getResult());
        		expect(specPage.getResult()).to.eventually.equal(res_str)
        		//return res_str;
        	  });