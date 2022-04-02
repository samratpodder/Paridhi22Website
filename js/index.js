// function to open/close nav
function toggleNav(){
    // if nav is open, close it
    if($("nav").is(":visible")){
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    // if nav is closed, open it
    else{
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
  
  var elem = document.querySelector(".pulse");
  var animation = elem.animate(
    {
      opacity: [0.5, 1],
      transform: ["scale(0.5)", "scale(1)"]
    },
    {
      direction: "alternate",
      duration: 500,
      iterations: Infinity
    }
  );
  