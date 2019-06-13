Feature: Super calculator

  Scenario Outline: Addition, Subtraction, Multiplication, Division, Modulo
    Given the user lands on "http://juliemr.github.io/protractor-demo/"
    Then the user enters <first_input> in the first input
    And he selects <operator> operator
    Then the user enters <second_input> in the second input
    Then the result should be <result>

    Examples: 
      | first_input | second_input | operator | result |
      |           1 |            4 | "+"      | "5"    |
      |          11 |            4 | "-"      | "7"    |
      |           1 |            4 | "*"      | "4"    |
      |          50 |            5 | "/"      | "10"   |
      |           1 |           10 | "%"      | "1"    |
