// ********QUESTIONS TO BE INSERTED INTO THE CARD********
// each question has a list of answers and the correct answer, that should be checked against
var questions = [{
    question: "Which electronic musical instrument emits the eeriest of sounds and is the only instrument played without touching it?",
	answers: ["Volin", "Conch", "Oboe", "Theremin"],
	correctAnswer: "Theremin"
}, 
{
	question: "How many keys are on most baby grand pianos?",
	answers: ["66", "88", "107", "59"],
	correctAnswer: "88"
}, 
{
	question: "Who was the lead singer of the band ‘Queen’?",
	answers: ["Sir Elton John", "Madonna", "Freddie Mercury", "Sting"],
	correctAnswer: "Freddie Mercury"
}, 
{
	question: "How many valves does a trumpet have?",
	answers: ["3", "5", "9", "18"],
	correctAnswer: "3"
}, 
{
	question: "What was Jimi Hendrix’s real name?",
	answers: ["Johnathan Brown Hendricks", "Jimmothy Thomas Hendricks", "Jarred Henery", "James Marshall Hendrix"],
	correctAnswer: "James Marshall Hendrix"
}, 
{
	question: "Jimmy Page is an English musician who formed which rock band in 1968?",
	answers: ["Pink Floyd", "Weezer", "Led Zeppelin", "Red Hot Chili Peppers"],
	correctAnswer: "Led Zeppelin"
}, 
{
	question: "Which of the following is a synonym of intonation?",
	answers: ["Timbre", "Staccato", "Legato", "Pitch"],
	correctAnswer: "Pitch"
}, 
{
	question: "The Stratocaster is a model of which guitar maker?",
	answers: ["Gibson", "Fender", "Rickenbacker", "C.F. Martin and Co."],
	correctAnswer: "Fender"
}, 
{
	question: "London born singer Miss Adkins is better known by what name?",
	answers: ["Leona Lewis", "Amy Winehouse", "Angela Lansbury", "Adele"],
	correctAnswer: "Adele"
}, 
{
	question: "In which American city was Elvis discovered dead in 1977?",
	answers: ["Los Angeles", "Memphis", "New Orleans", "Little Rock"],
	correctAnswer: "Memphis"
}];
// end of questions section

// sets up the page to wait until the Document Object Model is ready for the JS to actually run
console.log("working");
//TO MAKE SURE THE DAMN THING IS LINKED AND ACTUALLY WORKING!!!

// Identifies where each of the questions should be displayed on the page
var card = $("#triviaQuestions");
console.log ("spot 1");


// holds the setInterval that you HAVE TO HAVE TO MAKE THE DANG TIMER GO
var timer;

var game = {
// when the game begins it sets the timer to 100 seconds and the correct and incorrect answers to 0 since none have been submitted
    correct: 0,
    incorrect: 0,
    counter: 100,
  
    countdown: function() {
      game.counter--;
      $("#count").html("<div> Time Remaining: <span id='count-down'>" + game.counter +"</span> second</div>" )
      if (game.counter === 0) {
        game.done();
        console.log("the timer works, you idiot");
      }
    },
  
    start: function() {
        // trigger the function up above for the amount of milliseconds (aka 1 second at a time)
      timer = setInterval(game.countdown, 1000);
      console.log("did you get to this point? spot 2"); //checking functionality
      $("#start").remove();// removes the start button once clicked for user

        // styling for each question
      for (var i = 0; i < questions.length; i++) {
        card.append("<div class='card-text'>" + questions[i].question + "</div>");
        for (var x = 0; x < questions[i].answers.length; x++) {
          card.append("<div class='card-text'><input type='checkbox' name='question-" + i +
          "' value='" + questions[i].answers[x] + "''>" + questions[i].answers[x]+ '</div>');
          console.log("how about here? spot 3");
        }
        card.append("<hr>");
      }
  
      card.after("<button class='btn btn-info btn-block' id='done'>done</button>");
    },
  
// go through each question, and attach it to the page, and connect it, so that when submitted, it will show the right and wrong score.
    done: function() {
        // FIRST QUESTION because it is in array position 0
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
                console.log("did you make it all the way down here? spot 4");
            }
            else {
                game.incorrect++;
            }
        });
        // SECOND QUESTIONS in array position 1
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // THIRD QUESTION
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // FOURTH QUESTION
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // FIFTH QUESTION
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // SIXTH QUESTION
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // SEVENTH QUESTION
        $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // EIGHTH QUESTION
        $.each($("input[name='question-7']:checked"), function() {
            if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // NINTH QUESTION
        $.each($("input[name='question-8']:checked"), function() {
            if ($(this).val() === questions[8].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        // TENTH AND FINAL QUESTION
        $.each($("input[name='question-9']:checked"), function() {
            if ($(this).val() === questions[9].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
    this.result();
    },
    result: function() {

        clearInterval(timer);

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        }
};
// END GAME FUNCTIONALITY


    // CLICK EVENTS
    // goes into the document, listens for the user to click something with the ID start-->
    // goes to the function game, then down to the method 'start' and runs that set of the program
    $(document).on("click", "#start", function() {
        game.start();
       
    });
    
    // goes into the document, listens for the user to click something with the ID done-->
    // goes to the function game, then down to the method 'done' and runs that set of the program
    $(document).on("click", "#done", function() {
        game.done();
    });


    
    


