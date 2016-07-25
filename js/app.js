
$(document).ready(function() {

updateView();
assignlisteners();

});

var currentquestion = 0;
var correctanswer = 0;
var chosenAnswer;
var questions = [
	{title: "In 1971, John Draper found a way to hack phone systems to make free phone calls from anywhere, by using a toy whistle found in which type of cereal box?",
	answers:["Captain Crunch", "Cheerios", "Golden Grahams", "Rice Crispys"],
	correctanswer: 0,
},
	{title: "In what website did the hacker group Anonymous originate in 2003?",
	answers:["reddit", "2chan", "4chan", "digg"],
	correctanswer: 2,
},
	{title: "What year was PGP created?",
	 answers:["1988", "1997", "2000", "1991"],
 	 correctanswer: 3
 },
	{title: "Who was the first person convited of a felony under the Computer Fraud and Abuse Act in 1988?",
	answers: ["Robert Morris", "Kevin Mitnick", "Kevin Poulson", "Stephen Wozniak"],
	correctanswer: 0,
},
	{title: "Which of the tools listed is not a password cracking tool?",
	answers: ["Cain and Abel", "John the Ripper", "Maltego", "THC Hydra"],
	correctanswer: 2,
}
];

function assignlisteners() {
	$('ul').on('click', '#answer1', function(event){
		console.log('answer1 clicked');
		nextQuestion(0);
	});
	$('ul').on('click', '#answer2', function(event) {
		console.log('answer2 clicked');
		nextQuestion(1);
	});
	$('ul').on('click', '#answer3', function(event){
		console.log('answer3 clicked');
		nextQuestion(2);
	});
	$('ul').on('click', '#answer4', function(event){
		console.log('answer4 clicked');
		nextQuestion(3);
	});
	$('#playagainbutton').click(function(){
		currentquestion = 0;
		correctanswer = 0;
		$('#question_wrapper').show();
		$('.answerlist').show();
		$('#playagain').hide();
		$('.scorepics').empty();
		updateView();
	});

}

function nextQuestion(answer) {

var question = questions[currentquestion];

	if (answer == question.correctanswer) {
		$('.scorepics').append('<li><img src="images/lock.png"></li>');
		correctanswer++;
	}
	else {
		$('.scorepics').append('<li><img src="images/lockopen.png"></li>');
	}

	currentquestion++;

	if (questions.length == currentquestion) {
		$('#question_wrapper').hide();
		$('.answerlist').hide();
		$('#playagain').show();
		$('#totalscore').text(correctanswer);
	} else {
		updateView();
	}

}

function updateView() {

	var question = questions[currentquestion];

	$(".question").text(question.title);

	var inputs = $(".answer");

	for (i = 0; i < 4; i++) {
		$(inputs[i]).text(question.answers[i]);
	}
}
