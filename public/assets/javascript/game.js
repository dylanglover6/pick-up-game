var userCod =[]
var availableGames=[
  0,{
    
    lat:30.2670,
    lng:-97.7729,
    Name:"John Smith",
    Comments:"Playing Basketball until 2pm come join"
  },
  1,{
    
    lat:30.264268,
    lng:-97.722739,
    
    Name:"Eli Garza",
    Comments:"Tring to get a 5 a side going if anyone is intested"
  },
  2,{
   
    lat:30.285320,
    lng:-97.737845,
    Name:"Sam Ortiz",
    Comments:"Im not very good so only low leval players pls"
  },
  3,{ 
    lat:30.285160,
    lng:-97.734032,
    Name:"Michael Jordan",
    Comments:"GOATs! only"
  },

]


function initMap() {
  function empty(){
    availableGames.length = 0;
  }
  var gameImage='assets/images/basketballfield.png'
   var hostImgage='assets/images/basketball_ball .png'     
  var markerImage='assets/images/male-2.png'
  //var with austin cods
  var myLatLng = {lat: 30.2672, lng: -97.7431};

    // creating var map and setting senter to austin cords
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });
 
  $("#find-game").click(function(){
    for(i=0;i<availableGames.length; i++){
      nam
      var lat=availableGames[i].lat
      var lng=availableGames[i].lng
      var infowindow = new google.maps.InfoWindow({
        content: "<h3>"+ name +"</h3>"
        
      });
     var markerPos={
       lat: lat,
       lng: lng,
     }
     var markers = new google.maps.Marker({
      position: markerPos,
      map: map,
      title: 'Hello World!',
      icon: gameImage
    });
      console.log(lat)
      console.log(markerPos)
    
      
     };
    })
    
   
            // geolocation.
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                  
                };
                console.log(pos)
                userCod.push(pos)
                
                
              
              map.setCenter(pos);
              var userLocation = new google.maps.Marker({
                position: userCod[0],
                map: map,
                title: 'Hello World!',
                icon: markerImage
          
                
              });
                
              }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
              });
            } else {
              // Browser doesn't support Geolocation
              handleLocationError(false, infoWindow, map.getCenter());
            }
          }
      $(document).ready(function(){
        //int firebase db
        const config = {
        apiKey: "AIzaSyBdaBaHIZ1lf5cRCD_XT2cWo-akLUATqUY",
        authDomain: "st-group-project.firebaseapp.com",
        databaseURL: "https://st-group-project.firebaseio.com",
        projectId: "st-group-project",
        storageBucket: "st-group-project.appspot.com",
        messagingSenderId: "265360412018"
      };
      firebase.initializeApp(config);

      var database = firebase.database();
        
 
      
      //This is the code to get all the lats and longs from db
      var ref = database.ref();

      ref.on("value", function(snapshot) {
        // console.log(snapshot.val());
        $.each(snapshot.val(), function(index, value){
          console.log(index);
          var gameLat=value.lat
          var gameLng=value.lng
          var game = {
            id: index,
            lat: gameLat,
            lng: gameLng,
          }
          availableGames.push(game);
          console.log(availableGames);
          
        });
    }, function (error) {
        console.log("Error: " + error.code);
    });

      $("#new-game-btn").click(function(){
        var hostGame = this.value
        if(hostGame=='off'){
          
          
          console.log(userCod)
          $("#new-game-btn").attr('value', 'on');
          $("#new-game-btn").text("Stop Hosting Game")
          console.log(this.value)
      }else{
        $("#new-game-btn").attr('value', 'off');
        $("#new-game-btn").text("Host a New Game")
        
      }
      })
    
    
      
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
  });
