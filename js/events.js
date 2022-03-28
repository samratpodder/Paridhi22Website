var cards = $("#cards-parent");

console.log(cards);
var content = [
	{
		id: 1,
		title: "Code Bitch",
		description: "Code Bitch is a CP contest",
		category: "Coding",
	},
	{
		id: 1,
		title: "Code Bitch",
		description: "Code Bitch is a CP contest",
		category: "Coding",
	},
	{
		id: 1,
		title: "Code Bitch",
		description: "Code Bitch is a CP contest",
		category: "Coding",
	},
	{
		id: 1,
		title: "Code Bitch",
		description: "Code Bitch is a CP contest",
		category: "Coding",
	},
	{
		id: 2,
		title: "Makerr",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
	{
		id: 2,
		title: "Makerr",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
	{
		id: 2,
		title: "Makerr",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
	{
		id: 2,
		title: "Code Rush",
		description: "Code Rush is a CP contest",
		category: "Coding",
	},
	{
		id: 2,
		title: "Bot Rush",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "Bot F",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "Bot F",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "Bot F",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "Bot F",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "Bot F",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "Bot F",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "Bot F",
		description: "Code Rush is a CP contest",
		category: "Robotics",
	},
	{
		id: 2,
		title: "ElectroX",
		description: "Code Rush is a CP contest",
		category: "Electrical",
	},
	{
		id: 2,
		title: "Civily",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
	{
		id: 2,
		title: "Civily",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
	{
		id: 2,
		title: "Civily",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
	{
		id: 2,
		title: "Civily",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
	{
		id: 2,
		title: "Civily",
		description: "Code Rush is a CP contest",
		category: "Civil",
	},
];
function showCards(params, category) {
	for (const i of params) {
		if (i.category == category) {
			var card = `<div class="cardx" data-aos-offset="210" data-aos-duration="800" data-aos="zoom-in" >
			<div data-aos="fade-up">
			<div class="card-logo">
			<img class = "logo" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
			</div>
			<img
			src="../assets/images/cardsbackground.jpg"
			class="card-img-top"

        alt="..."
        height="150px"
        width="auto"
		/>
		</div>
		<div class="card-body" data-aos-duration="1000" data-aos-offset="60" data-aos="fade-down">
		
		<span class="border">
		<span class="gradient"></span>
		<span class="container blink_text">${i.title}</span>
		</span>
        <p class="card-text">
		${i.description}
        </p>
		</div>
		</div>`;
			cards.append(card);
		}
	}
}
showCards(content, "Robotics");

function contentSize() {
	var cardsContainer = $(".cards-container");
	console.log(cardsContainer);
	var height = cards.height();
	cardsContainer.height(height + 100);
	console.log(cardsContainer.height());
	window.onresize = () => {
		var height = cards.height();
		cardsContainer.height(height + 200);
		console.log(cardsContainer.height());
	};
}
contentSize();

var option = document.getElementById("selectt");
// var optionsArr = ["Robotics", "Civil", "Electrical", "Coding"];
option.addEventListener("change", () => {
	// console.log(optionsArr[option.options]);
	cards.empty();
	let category = option.options[option.selectedIndex].value;
	showCards(content, category);
	contentSize();
});
window.onscroll = () => {
	contentSize();
};
// function change() {
// }
// // if(window.innerWidth<1100){
// // 	cardsContainer.height(height+200);
// // }
// change();
