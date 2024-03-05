//node uses commonJS library,BY default every file is module
//modules : Encapsulated code(only share minimum)
// const asiya="Asiya";
// const tabbu="tabbu"
// const secret="SUPER SECRET"

// const sayHi=(nam)=>{
//     console.log(`Hello there ${nam}`)
// }

// sayHi("arman")
// sayHi(asiya)
// sayHi(tabbu)

//accessing names from 3-names.js
// const names=require('./3-names.js')
// console.log(names); //{ asiya: 'Asiya', tabbu: 'tabbu' }

// //access function from 3-utility.js
// const sayHi=require('./3-utility.js')

// sayHi("arman")
// sayHi(names.asiya)
// sayHi(names.tabbu)

// //2ND way
// //we are accessing objects from 3-more.js
// const data=require('./3-more.js')
// console.log(data)

//3RD WAY
//accessing 3-moremore.js invoked function without exporting
require('./3-moremore.js') //sum:15

