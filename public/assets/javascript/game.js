//Login Page Find Game Function
$("#find-game-btn").on("click", function(){
  event.preventDefault();
  window.location.href = 'index.html'
  //insert function for loading map on index.html
});

//Login Page Host Game Function
$("#btnSignUp").on("click", function(){
  event.preventDefault();
  //window.location.href = 'index.html'
  //insert function for loading map on index.html with location source
});

$("#btnLogin").on("click", function(){
  event.preventDefault();
  //window.location.href = 'index.html'
  //insert function for loading map on index.html with location source
});


const config = {
  apiKey: "AIzaSyBdaBaHIZ1lf5cRCD_XT2cWo-akLUATqUY",
  authDomain: "st-group-project.firebaseapp.com",
  databaseURL: "https://st-group-project.firebaseio.com",
  projectId: "st-group-project",
  storageBucket: "st-group-project.appspot.com",
  messagingSenderId: "265360412018"
};
firebase.initializeApp(config);