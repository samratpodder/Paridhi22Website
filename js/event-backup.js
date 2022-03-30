let svg = document.querySelector(".bg-anim");
let colors = ["Gold", "HotPink", "MediumSpringGreen"];
let test = document.querySelector(".container");

function drawCircles() { 
  for (i = 0; i < 15; i++) {
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", Math.floor(Math.random() * 500));
    circle.setAttribute("cx", Math.floor(Math.random() * 500)); 
    circle.setAttribute("cy", Math.floor(Math.random() * 500));
    circle.setAttribute("stroke-width", Math.floor(Math.random() * 5));
    circle.setAttribute("stroke", colors[Math.floor(Math.random() * colors.length)]);
    svg.appendChild(circle);
  }
}

function removeAll() {
  while (svg.firstChild) {
    svg.removeChild(svg.lastChild);
  }
}

svg.addEventListener("click", ()=>{
  removeAll();
  drawCircles();
  console.log("clicked!");
});

drawCircles();