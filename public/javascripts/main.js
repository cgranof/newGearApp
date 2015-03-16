var renderTrips = function(trips) {
  $('#trips-list').empty();
  for (var i = 0; i < trips.length; i++) {
    $('#trips-list').append('<li>' + trips[i].location + '</li>');
  }
};

// $.post('', clothingList, function(dataFromServer){

// })


$(function () {


  $('#get-trips').on('click', function(e) {
    $.get('/triplist', function(trips) {
      renderTrips(trips);
    });
  });


    
  $("#gearSave").click(function(event){
      event.preventDefault();
      
        var clothingList = $("#clothingList input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 
        

        // $.post('/update', {clothing: clothingList}, function(dataFromServer){
        $.post('/update', {clothingList: clothingList}, function(dataFromServer){

        }, "json");
        console.log(clothingList);
        
        var campList = $("#campList input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 

        var safetyList = $("#safetyList input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 
      // var gearList = clothingList + campList + safetyList;
      

      // console.log(clothingList); 
      // console.log(campList)
      // console.log(safetyList)
      $('#myModal').modal('hide');
  });
});
