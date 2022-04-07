// monitorEvents(document.body);
//function to scroll down on load
function scrollDown(pos){
  window.scroll(0,pos);
}
//call scrollDown when the page is loaded with value of 250
// $(document).ready(function(){
//   scrollDown(250);
// });

// function to open/close nav

function toggleNav(){
    // if nav is open, close it
    if($("nav").is(":visible")){
      console.log("Closed Navbar");
      setTimeout(function(){
        [...document.getElementsByClassName("el")].forEach(element => {
          // console.log(element);
          element.classList.toggle("d-none");
          element.style.display = "block";
        });
      },2000);
      
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    // if nav is closed, open it
    else{
      [...document.getElementsByClassName("el")].forEach(element => {
        // console.log(element);
        // element.classList.toggle("d-none");
        element.style.display = "none";
      });
      $("button").addClass("menu");
      $("nav").fadeIn().css('display', 'flex');
    }
  }
  function toggleScrollbar() {
    $("body").toggleClass("noscroll");
  }
  // when clicking + or ☰ button
  $("button").click(function(){
    // when clicking ☰ button, open nav
    if($("header").hasClass("open")){
      toggleNav();toggleScrollbar();
    }
    // when clicking + button, open header
    else{
      $("header").addClass("open");
      setTimeout(function(){
        [...document.getElementsByClassName("el")].forEach(element => {
          // console.log(element);
          element.classList.toggle("d-none");
          element.style.display = "block";
        });
      }, 2000);
      
      window.scroll(0,0);
      
    }
  });
  
  // close nav
  $("#nav-close").click(function(){
    toggleNav();toggleScrollbar();
  });
  
  // scroll to sections
  $("nav li").click(function(){
    // get index of clicked li and select according section
    var index = $(this).index();
    var target = $("content section").eq(index);
    
    toggleNav();
    
    $('html,body').delay(300).animate({
      scrollTop: target.offset().top
    }, 500);
  });
  var animationTopodown = {
    el: "#splitdown",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2ad1dc,
    backgroundColor: 0x6b6464
  };
  var animationTopoup = {
    el: "#splitup",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2ad1dc,
    backgroundColor: 0x6b6464
  };
  var animationTrunk = {
    el: "#introwrapper",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x19e148,
    backgroundColor: 0x1f2937,
    spacing: 5.50,
    chaos: 2.50
  }
  ;
  VANTA.TOPOLOGY(animationTopoup);
  VANTA.TOPOLOGY(animationTopodown);
  // VANTA.TRUNK(animationTrunk);

  //LANDING PAGE ANIMATION
  var layerCount = 5;
  var starCount = 400;
  var maxTime = 30;
  var universe = document.getElementById("universe");
  var w = window;
  var d = document;
  var e = d.documentElement;
  var g = d.getElementsByTagName("body")[0];
  var width = w.innerWidth;
  var height = w.innerHeight;
  // console.log(width+"x"+height);
  for (var i = 0; i < starCount; ++i) {
    var ypos = Math.round(Math.random() * height);
    var star = document.createElement("div");
    var speed = 5000 * (Math.random() * maxTime + 1);
    star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
    star.style.backgroundColor = "white";
    star.style.zIndex = "50";
  
    universe.appendChild(star);
    star.animate(
      [
        // {
        //   transform: "translate3d(-" + width + "px, " + ypos + "px, 0)"
        // },
        {
          transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
        },
        {
          transform:
          "translate3d(-" + width + "px, " + ypos + "px, 0)"
        }
      ],
      {
        delay: Math.random() * -speed,
        duration: speed,
        iterations: 1000
      }
    );
  }
  
  // var elem = document.querySelector(".pulse");
  // var animation = elem.animate(
  //   {
  //     opacity: [0.5, 1],
  //     transform: ["scale(0.5)", "scale(1)"]
  //   },
  //   {
  //     direction: "alternate",
  //     duration: 500,
  //     iterations: Infinity
  //   }
  // );
  




var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
  console.log("s--inactive removed");
}, 500);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});
