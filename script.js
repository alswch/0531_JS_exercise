var myInfo = {
  firstName: "Alexander",
  lastName: "Chung",
  birthday: "June 29,1987",
  interests: ["ski", "golf", "food", "movies"],
  initialize: function() {
    // console.log("==initialize==");
    for (i=0; i < myInfo.interests.length; i++) {
    console.log(myInfo.interests[i]);
    }
  },
  printObj: function() {
    console.dir(myInfo);
    console.log(myInfo);
  }
};
myInfo.initialize();
myInfo.printObj();
// console.log("interests:", myProfile.interests);
