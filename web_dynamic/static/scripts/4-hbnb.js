$(document).ready(function () {
  const amenityCheck = {};
  $('.amenities INPUT').change(function () {
    if (this.checked) {
      amenityCheck.push($(this).attr('data-name'));
    } else {
      amenityCheck.pop($(this).attr('data-name'));
    }
    $('.amenities H4').html(Object.values(amenityCheck).join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
  $('.filters BUTTON').click(function () {
    $.ajax({
      data: JSON.stringify({ amenities: Object.keys(amenityCheck) }),
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      contentType: 'application/json',
      dataType: 'json',
      success: function (data) {
        for (let x = 0; x < data.length; x++) {
          const place = data[x];
          $('.places').append('<article><h2>' + place.name +
            '</h2><div class="price_by_night"><p>' +
            place.price_by_night +
            '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' +
            place.max_guest +
            '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' +
            place.number_rooms +
            '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' +
            place.number_bathrooms +
            '</p></div></div><div class="description"><p>' +
            place.description +
            '</p></div></article>');
        }
      }
    });
  });
});
