Feature: Negative test case

Scenario: addition of two strings a negative test case

	Given the landing page "http://juliemr.github.io/protractor-demo/"
	Then the user enters "a" in the first input
	And he selects the '+' operator
	Then the user enters "b" in the second input field
	Then the result should be a string "NaN"
   