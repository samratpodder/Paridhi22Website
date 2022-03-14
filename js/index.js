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
var text= baffle(".data");

text.set({
    characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
    speed: 120
});
text.start();
text.reveal(3000);