//npm: node package manager, when we install node we also install npm
//to get version , in terminal : node --version or node --v
//we can get npm as locally or globally
//(i) local dependency - use it only in this particular project
//npm i <packagename>
//(ii) global dependency - use it in any project
//npm install -g <packagename>
//sudo npm install -g <packagename> (mac)

//package.json : it is manifest file it stores imp info about project/package
//we can  create in 3 ways
//(i) manual approach (create package.json in root,create properties etc)
//(ii) npm init (step by step,press enter to skip)
//(iii) npm init -y (everything default)


//accessing loader as we did install dependency loadash
const _= require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
