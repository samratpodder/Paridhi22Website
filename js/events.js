var cards = $("#cards-parent");

console.log(cards);
var content = [
	{ id: 1, title: "Code Bitch", description: "Code Bitch is a CP contest" },
	{ id: 2, title: "Code Rush", description: "Code Rush is a CP contest" },
	{ id: 2, title: "Code Rush", description: "Code Rush is a CP contest" },
	{ id: 2, title: "Code Rush", description: "Code Rush is a CP contest" },
	{ id: 2, title: "Code Rush", description: "Code Rush is a CP contest" },
	{ id: 2, title: "Code Rush", description: "Code Rush is a CP contest" },
];

for (const i of content) {
	var card = `<div class="cardx" data-aos-offset="200" data-aos-duration="800" data-aos="flip-left" style="width: 18rem">
    <img
        src="../assets/images/cardsbackground.jpg"
        class="card-img-top"
        alt="..."
        height="200px"
        width="auto"
    />
    <div class="card-body" data-aos-duration="1000" data-aos-offset="80" data-aos="fade-down">

        <h5 class="card-title"><span class="card-title-text" >${i.title}</span></h5>
        <p class="card-text">
            ${i.description}
        </p>
    </div>
</div>`;
	cards.append(card);
}
var options = ["Try it out", "Its awasome"];
var typed = new Typed(".typedd", {
	strings: options,
	loop: true,
	typeSpeed: 50,
	backSpeed: 50,
	delay: 1000,
	cursorChar: "|",
});
