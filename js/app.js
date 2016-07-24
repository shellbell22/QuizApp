
$(document).ready(function() {

var currentquestion = 0;

var questions = [
	{title: "In 1971, John Draper found a way to hack phone systems to make free phone calls from anywhere, by using a toy whistle found in which type of cereal box?",
	answers:["Captain Crunch", "Cheerios", "Golden Grahams", "Rice Crispys"],
	correctanswer: 0,
},
	{},
	{},
	{},
	{}
];

var question = questions[currentquestion];

$(".question").text(question.title);

var inputs = $(".answer");

for (i = 0; i < 4; i++) {

	$(inputs[i]).text(question.answers[i]);

}

});
