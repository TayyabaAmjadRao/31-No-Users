"use strict";
// Written by : TAYYABA RAO
// Date: 18/feb/2024
//array for usernames
let usernames = ['admin', 'Aslam', 'Arshad', 'Afzal', 'Akram'];
// checking user availibility
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // removing all usernames from the array
    usernames = [];
    console.log("All usersnames have been removed. " + usernames.length);
}
