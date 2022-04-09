let navmenu=document.getElementById("nav-menu");
let hamburger=document.getElementById("hamburger");
let closeButton=document.getElementById("close");
let listItem= document.querySelectorAll(".listItem");

hamburger.addEventListener("click", ()=>{
    navmenu.classList.add("show");
    console.log("clicked");
})

closeButton.addEventListener("click", ()=>{
    navmenu.classList.remove("show");
    console.log("clicked");
})
var i;
console.log(listItem)
for(i=0;i<listItem.length;i++){
    listItem[i].addEventListener("click", ()=>{
        navmenu.classList.remove("show");
    })
}