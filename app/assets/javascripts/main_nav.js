$(document).ready(function(){
  $('.main-side-nav li').hover(function(){
    console.log($(this).data('target'));
    var el = $(this).data('target');

    $('.pane').addClass('hidden');
    $( el ).removeClass('hidden');
  }, function() {
    $('.pane').addClass('hidden');
  });

});
