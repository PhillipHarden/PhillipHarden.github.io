// // User Object List-----------------------------------------------------------------------------------------------------
// let user = [
//     {
//         firstName: "Phillip",
//         lastName: "Harden",
//         userName: "Phil123",
//         password: "123",
//         location: "Lilburn, GA"
//     },
//     {
//         firstName: "Tom",
//         lastName: "Jones",
//         userName: "Tom1234",
//         password: "1234",
//         location: "New York, NY"
//     },
//     {
//         firstName: "Karen",
//         lastName: "Smith",
//         userName: "Karen12345",
//         password: "12345",
//         location: "Winter Park, FL"
//     }
// ]
// //----------------------------------------------------------------------------------------------------------------------
// // Greet the user and invite them to log in, create a profile, or continue as a guest
// console.log("Welcome to The47Spot.Com! ")
// let noDecision = true; // bool to keep the while loop from stopping until a decision has been made
// while(noDecision){
//     let createAcc;
//     createAcc = EntryValidation(createAcc, "Would you like to login, create an account, or continue as a guest? (type \"login\" , \"create\" , or \"guest\")" )
//     switch (createAcc) {
//         case "log in":
//         case "login":
//         case "l":
//             LogIn();
//             break;
//         case "create account":
//         case "create":
//         case "c":
//             CreateAccount();
//             break;
//         case "guest":
//         case "g":
//             Guest();
//             break;
//         default: alert("Please only enter \"login\" , \"create\", or \"guest\":")
//     }
// }
// // Functions------------------------------------------------------------------------------------------------------------
// // User logs in using existing users from the users list
// function LogIn(){
//     let userName;
//     userName = EntryValidation(userName, "Please enter your user name:");
//     let password;
//     password = EntryValidation(password, "Please enter your password:");
//     for(let i = 0; i < user.length; i++){
//         if(userName == user[i].userName && password == user[i].password){
//             console.log("You are logged in.\n\nWelcome "+user[i].firstName+"!");
//             console.log("PROFILE INFO\nName: "+user[i].firstName+" "+user[i].lastName+"\nLocation: "+user[i].location+"\nUser Name: "+user[i].userName+"");
//             noDecision = false;
//             return;
//         }
//     }
//     alert("Incorrect user name or password!")
// }
// // User creates an Account
// function CreateAccount(){
//     user.firstName = EntryValidation(user.firstName, "Please enter your first name:")
//     user.lastName = EntryValidation(user.lastName, ("Please enter your last name:"))
//     let city;
//     city = EntryValidation(city, "Please enter your city:")
//     let state;
//     state = EntryValidation(state, "Please enter your state:")
//     user.location = ""+city + ", "+ state+"";
//     user.userName = EntryValidation(user.userName,"Please create a unique user name:")
//     user.password = EntryValidation(user.password,"Please enter your password:")
//
//     console.log("You are logged in.\n\nWelcome "+user.firstName+"!")
//     console.log("PROFILE CREATED\nName: "+user.firstName+" "+user.lastName+"\nLocation: "+user.location+"\nUser Name: "+user.userName+"")
//
//     noDecision = false;
// }
// // User continue as a guest
// function Guest(){
//     console.log("Welcome Guest!");
//     noDecision = false;
// }
// // Users entry validation
// function EntryValidation(a, b){
//     a = prompt(b);
//     while(a == ""){
//         alert("Please do not leave this blank.");
//         a = prompt(b);
//     }
//     return a;
// }
