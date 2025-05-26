0.2 + 0.1
// 0.30000000000000004
// - integers are complicated in javascript (and lots of other languages)

20.95 + 7.99
// 28.939999999999998
// when doing something with money, it is better to use cents since computers can interprent whole numbers without a problem 

// solution = using cents
2095 + 799 
// 2894
(2095 + 799) / 100
// 28.94

Math.round(2.2)
// 2
Math.round(2.8)
// 3

((2095 + 799) * 0.1) / 100
// 2.894

Math.round((2095 + 799) * 0.1) / 100
2.89

Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100
5.29

