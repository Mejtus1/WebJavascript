'hello'
'hello'

// string = text 

"some" + "text"
"sometext"

'some' + 'more' + 'text'
// concatenation
'somemoretext'

typeof 2 
// 'number'
typeof 'hello'
// string
'hello' + 3
// 'hello3' (converts automatically numbers into strings) = automatic type conversion

'$' + 20.95 + 7.99
// $20.957.99 (automatically converted into string)

// we can manage this with Order of Operations 
'$' + (20.95 + 7.99)
$28.93999999999999998

'$' + (2095 + 799) / 100 
$28.94

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
'Items (2): $28.94'

alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);
undefined
// popup shown with text 

`items (${1 + 1}): $${(2095 + 799) / 100}`
// 'items (2): $28.94'
// !! using BACKTICKS not Single Quote Strings !! 

`template multiline 
strings`
// template strings with BACKTICKS are only strings that can be used in multiline feature

