$('#toggle').click(function() {
  console.log('toggle');
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});