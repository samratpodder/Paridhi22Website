// let toggleButton= document.getElementById("toggle-box");
// let navigator= document.getElementById("navigator");
// toggleButton.addEventListener("click", ()=>{
//   navigator.classList.toggle("show");
//   // toggleButton.addEventListener("click",()=>{
//   //   navigator.classList.remove("show");
//   // })
//   console.log("click");
// })


$(document).ready(function () {
  $(".toggle-box").click(function () {
    $(this).toggleClass("open");
    $(".navigator").toggleClass("show");
    console.log("clicked");
  });
});



