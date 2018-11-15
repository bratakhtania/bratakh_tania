alert($("#elem").html());



 $( document ).ready(function() {

      $('#list-header').css({ 'font-weight': 'bolder' }); 

      $('#list-header').append("<strong> 1</strong>");


	  $('#color').css({ 'color': '#555' });

      var change = $("#name").html().replace('Peter','Tania');

	  $("#name").html(change);

    });