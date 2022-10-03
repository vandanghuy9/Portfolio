// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName :"mark",
//         favColor: "blue"
//     },
//     stock:100
// };

// console.log(facebook);

// var twitter = new Object();
// twitter.ceo = "van dang huy";
// console.log(twitter['ceo']); 
// // each property of 
// // a object is associated with a string that can 
// // be used to access

// // function in JS is objects, what can do with objects
// // can also be done with function

// function multiply(x,y){
//     return x* y;

// }

// console.log(multiply("dang","huy"));
// multiply.version = "v.1.0.0";
// console.log(multiply);
// console.log(multiply.version);
// function makeMultiplier(multiplier){
//     var myFunc = function(x){
//         return multiplier * x;
//     };
//     return myFunc;
// } 
// // function is an object, can be used as object

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// // passing function as argument
// function doOperationOn(x,operation){
//     return operation(x);
// }

// var result = doOperationOn(3,multiplyBy3);
// console.log(result);

// // passed by reference

// // if argument is primitive, that's pass by value
// // value is copied to different location, original value 
// //  is still in old location
// // if argument is object that's pass by reference
// // location is passed to function, so value is location
// // func change value in particular location
// // consider pass by reference as pointer

// // function changeValue(obValue){
// //     console.log("before");
// //     console.log(obValue.x);
// //     obValue.x = 5;
// //     console.log("after");
// //     console.log(obValue.x);
// // }

// // var obValue ={
// //     x : 7
// // };
// // changeValue(obValue);
// // console.log("After passed to func:");
// // console.log(obValue.x);

// // func construction

// var literalCircle ={
//     radius:10,
//     getArea: function(){
//         var self= this;
//          var IncreaseRadius = function(){
//             self.radius = 20;
//         };
//         IncreaseRadius();
//         console.log(this.radius);
//         return Math.PI * Math.pow(this.radius,2);
//     }
// };

// console.log(literalCircle.getArea());
// // short hand array creation
// var names = ["van","dang","huy"];
// var myObj ={
//     name:"huy",
//     class:"04"
// };

// for (var prop in myObj){
//     console.log(prop + ":" + myObj[prop]);
// }

// for (var name_each in names){
//     console.log("hello"+ names[name_each]);
// }


(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i=0;i<names.length;i++){
        var firstLetter = names[i][0].toLowerCase();
        if (firstLetter === "j"){
            goodbyeSpeaker.speak(names[i]);
        }
        else{
            helloSpeaker.speak(names[i]);
        }
    }
})();