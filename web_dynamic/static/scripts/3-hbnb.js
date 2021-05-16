$( document ).ready(function () {
  const amenityCheck = {};
  $('.amenities INPUT').change(function() {
    if (this.checked) {
      amenityCheck.push($(this).attr('data-name'));
    } else {
      amenityCheck.pop($(this).attr('data-name'));
    }
    $('.amenities H4').html(Object.values(amenityCheck).join(', '));
  });
});

$.get("http://0.0.0.0:5001/api/v1/status/", function(data) {
  if (data.status === ("OK") {
    $( "#api_status" ).addClass("available") {
      else {
    $( "#api_status" ).removeClass("available")
      }
    }
  });
});

$.ajax({
  data: '{}',
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  contentType: 'application/json,
  dataType: 'json',
  success: function (data) {
    for (let x = 0; x < data.length; x++) {
      let place = data[x];
      const guest = (value.max_guest > 1) ? 'guests' : 'guest';
      const rooms = (value.number_rooms > 1) ? 'rooms' : 'room';
      const bathrooms = (value.number_bathrooms > 1) ? 'bathrooms' : 'bathroom';
      $


