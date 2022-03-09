$(document).ready(function(){
	$('.toggle-box').click(function(){
        
		$(this).toggleClass('open');
        $(".navlist").toggleClass("show");
	});

});

var portfolioExperiment = document.querySelectorAll(".nav-link");
var i;
console.log(portfolioExperiment);

for(i=1;i<4;i++){
	
	portfolioExperiment[i].addEventListener("mouseover",function(e){
		var j;
		for(j=0;j<4;j++){
			if(portfolioExperiment[j]==e.path[1]);
			{
				console.log(e.path[1] ," " +e.path[1].children[0]);
				console.log("found");
				break;
			}
		}
		
		
		// var j= portfolioExperiment.indexOf(x);
		// var c=j-1;
		// console.log(c);
		// console.log(portfolioExperiment[c]);
		// portfolioExperiment[c].classList.remove("effect");
	})

}
var z=0;
// while(z<1){
const text1 =  baffle(".first");
text1.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});
text1.start();
text1.reveal(1000);
text1.start()

const text2 =  baffle(".second");
text2.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});
text2.start();
text2.reveal(1000, 3000);
text2.start();

const text3 =  baffle(".third");
text3.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});
text3.start();
text3.reveal(1000, 5000);
text3.start();


const text4 =  baffle(".fourth");
text4.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});
text4.start();
text4.reveal(1000, 8000);
text4.start();
// }