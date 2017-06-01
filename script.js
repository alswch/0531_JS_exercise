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


//====== functions/arguments ======
var example = {
  string1: "A",
  string2: "B",
  number1: 40,
  number2: 30,
  argumentsObj: function() {
    console.log("==argumentsObj==");
    console.log("this:", this);
    console.log(this.string1);
    console.log(this.string2);
    console.log(this.number1);
    console.log(this.number2);
    var addition = this.number1 + this.number2;
    console.log(addition);
    var addition2 = this.string1 + this.string2;
    console.log(addition2);
  }
};
example.argumentsObj();
