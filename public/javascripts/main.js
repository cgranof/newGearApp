// for the mapshome page attached to the button to view name of location
var renderTrips = function(trips) {
  $('#trips-list').empty();
  for (var i = 0; i < trips.length; i++) {
    $('#trips-list').append('<li>' + trips[i].location + '<a href="/destination">' + ' ' + 'view' + '</a>' + '</li>');
  }
};


//for the destination page, view on document ready
var renderDestination = function(trips) {
  $('#destination-list').empty();
  // for (var i = 0; i < trips.length; i++) {
    $('#destination-list').append('<li>' +
      trips[0].location +
      '<li>' + trips[0].activity + '</li>'+
      '<li>' + trips[0].clothing + '</li>'+
      '<li>' + trips[0].campgear + '</li>'+
      '<li>' + trips[0].safety +
      '</li>');
    console.log(trips[0].clothing);
  // }
};


//for the profile page to show the gear a user has selected as gear they have 
var renderGear = function(user) {
  $('#gear-list').empty();
  for (var i = 0; i < user.camp.length; i++) {
    $('#gear-list').append('<li>' + user.camp[i] + '</li>');
  }
  for (var i = 0; i < user.clothing.length; i++) {
    $('#gear-list').append('<li>' + user.clothing[i] + '</li>');
  }
  for (var i = 0; i < user.safety.length; i++) {
    $('#gear-list').append('<li>' + user.safety[i] + '</li>');
  }
};




$(function () {


//render the destination info on the destination page
    $.get('/triplist', function(trips){
      renderDestination(trips);
  });


//render the locations on the mapshome page
  $('#get-trips').on('click', function(e) {
    $.get('/triplist', function(trips) {
      renderTrips(trips);
    });
  });



//save the gear clicked in to an array and send to the server
  
  $("#gearSave").click(function(event){
      event.preventDefault();
      
        var clothingList = $("#clothingList input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 
        var campList = $("#campList input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 
        var safetyList = $("#safetyList input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 
        
        $.post('/update', {clothingList: clothingList, campList: campList, safetyList: safetyList}, function(dataFromServer){
        }) ;
         
      $('#myModal').modal('hide');
  });
  

//click handler for user profile to save gear
   $('#get-gear').on('click', function(e) {
    e.preventDefault();
    $.get('/gearlist', function(user) {
      renderGear(user);
      console.log(user);  
    });
  });

// click handler for user profile to show saved trips
   $('#compare-gear').on('click', function(e){
    e.preventDefault();
    $.get('/compare', function(results){
          for(var gearcat in results) {
            for(var i in results[gearcat]) {
              $('#saved-tripslist').append('<li>'+ results[gearcat][i] + '</li>');
            }
          }   
      });
    });
    // console.log("clicked");
    
});
