// ====== objects/arrays ======
// var myInfo = {
//   firstName: "Alexander",
//   lastName: "Chung",
//   birthday: "June 29,1987",
//   interests: ["ski", "golf", "food", "movies"],
//   initialize: function() {
//     // console.log("==initialize==");
//     for (i=0; i < myInfo.interests.length; i++) {
//     console.log(myInfo.interests[i]);
//     }
//   },
//   printObj: function() {
//     console.dir(myInfo);
//     console.log(myInfo);
//   }
// };
// myInfo.initialize();
// myInfo.printObj();
//
//
// //====== functions/arguments ======
// var example = {
//   string1: "A",
//   string2: "B",
//   number1: 40,
//   number2: 30,
//   argumentsObj: function() {
//     console.log("==argumentsObj==");
//     console.log("this:", this);
//     console.log(this.string1);
//     console.log(this.string2);
//     console.log(this.number1);
//     console.log(this.number2);
//     var addition = this.number1 + this.number2;
//     console.log(addition);
//     var addition2 = this.string1 + this.string2;
//     console.log(addition2);
//   }
// };
// example.argumentsObj();
//
// //====== conditionals ======
// var numb = 20;
// if (numb < 10) {
//   alert = "You got it."
//   console.log(alert)
// }
// else {
//   alert2 = "You are wrong."
//   console.log(alert2);
// };
//
// var black = "phone";
// var white = "phone";
// if (black == white) {
//   alert = "You got it."
//   console.log(alert)
// }
// else {
//   alert2 = "You are wrong."
//   console.log(alert2);
// };
//
// //====== arrays ======
// var type = ["sports", "coupe", "sudan", "SUV", "truck"];
// var colors = ["black", "white", "red"];
// var car = [type, colors];
// console.log(type[0]);
// console.log(type[4]);
// console.log(colors[0]);
// console.log(colors[2]);
// console.log(car[0]);
// console.log(car[1]);
// console.log(car[0][0]);
// console.log(car[0][2]);

//====== arrays methods======
var letters = ["A", "B", "C", "D", "E"];
function myLetters() {
  console.log("==myLetters==");
  console.log("this", this);
  letters.push("F");
  console.log("push:", this.letters);
}
myLetters();
