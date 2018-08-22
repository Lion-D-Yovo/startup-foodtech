$(document).ready(function() {

    $('ul.tabs li').click(function() {
      var tab = $(this).data('tab');
  
      $('.tab-container').removeClass('current');
      $('ul.tabs li').removeClass('current');
  
      $(this).addClass('current');
      $("#" + tab).addClass('current');
    })

  
  })