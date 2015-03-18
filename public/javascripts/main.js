var renderTrips = function(trips) {
  $('#trips-list').empty();
  for (var i = 0; i < trips.length; i++) {
    $('#trips-list').append('<li>' + trips[i].location + '<a href="/destination">' + ' ' + 'view' + '</a>' + '</li>');
  }
};

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
        $.get('/compare', function(results){
          console.log('test ' , results);
        });
        console.log(clothingList, campList, safetyList);
        
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
});
