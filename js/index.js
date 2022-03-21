$(document).ready(function () {
  $(".toggle-box").click(function () {
    $(this).toggleClass("open");
    $(".navlist").toggleClass("show");
  });
});

var portfolioExperiment = document.querySelectorAll(".nav-link");
var i;

var text = baffle(".data");

text.set({
  characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
  speed: 120,
});
text.start();
text.reveal(3000);



