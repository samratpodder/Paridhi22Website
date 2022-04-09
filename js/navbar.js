$(document).ready(function () {
    $(".toggle-box").click(function () {
      $(this).toggleClass("open");
      $(".navigator").toggleClass("show");
      console.log("clicked");
    });
  });
  