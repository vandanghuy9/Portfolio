
// Module {
//     id: '.',
//     path: 'D:\\Assignment 2\\js',       
//     exports: {},
//     filename: 'D:\\Assignment 2\\js\\tmp.js',
//     loaded: false,
//     paths: [
//       'D:\\Assignment 2\\js\\node_modules',
//       'D:\\Assignment 2\\node_modules',
//       'D:\\node_modules'
//     ]
//   }

// export above is an object. we can get module from export
// Each module has its own export object 
const sayHiFunc = require('./app');

// When we say this, sayHiFunc = app.js 's exports object 
sayHiFunc.sayHi("function in object: "+sayHiFunc.name2);
console.log("attribute in object: "+sayHiFunc.name1);
console.log(module);