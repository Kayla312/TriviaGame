// PSUDO CODE FOR TRIVIAL GAME
// THEME: MUSIC ( OR THERE ABOUTS....)

// DIRECTIONS

// 3 rounds of 10 question (ambitious but I’m gonna try)
// Multiple choice or true false for options to answer
// ~make sure user can only select one answer for each question
// 30-60 seconds per question, so countdown clock should limit the game length
// ~when timer runs down, reveal score of game (correct and incorrect)

// Create a form with 10 questions
// 	each question should have options (true/false or ABCD)

// 	EACH QUESTION SHOULD ONLY BE ABLE TO ANSWER ONCE!
// ______at the end when the whole thing is either submitted or times out _____
// 	if the answer selected is correct, add 1++ to score correct
// 	if answer selected is incorrect, add 1++ to score incorrect
// 	if there are answers un-answered when the time runs out, 1++ unanswered

//  Have a timer set up to count down (depending on how hard the questions are the time length)*****
// 	show an alert at 30 second left to warn the player
// 	when the timer runs out,  calculate the accurate scores for correct, incorrect and unanswered
// 	display the score on the page for the player to review at the end of the game 

// ****notes on the video examples****
// Background doesn’t change
// Header/title doesn’t change
// Just information in the middle of the page changes (aka start button/questions/review of answers)
// 		~~could be done using nested containers
// 		~~so that as each thing happens (on click for start button—>changes main container…after answering all the questions or timer running out(alert about timer running down)—>changes main container…

    // sets up the page to wait until the Document Object Model is ready for the JS to actually run
    console.log("working");
    //TO MAKE SURE THE DAMN THING IS LINKED AND ACTUALLY WORKING!!!

// Identifies where each of the questions should be displayed on the page
var card = $("#triviaQuestions");
console.log ("spot 1");


// ********QUESTIONS TO BE INSERTED INTO THE CARD********
// eaach question has a list of answers and the correct answer, that should be checked against
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

// holds the setInterval that you HAVE TO HAVE TO MAKE THE DANG TIMER GO
var timer;

var game = {
// when the game begins it sets the timer to 100 seconds and the correct and incorrect answers to 0 since none have been submitted
    correct: 0,
    incorrect: 0,
    counter: 100,
  
    countdown: function() {
      game.counter--;
      $("#count").html(game.counter);
      if (game.counter === 0) {
        game.done();
        console.log("the timer works, you idiot");
      }
    },
  
    start: function() {
        // trigger the function up above for the amount of milliseconds (aka 1 second at a time)
      timer = setInterval(game.countdown, 1000);
      console.log("did you get to this point? spot 2");
  
      $("#count").prepend("<h2>Time Remaining: <span id='count-down'></span> seconds</h2>");
  
      $("#start").remove();
  
      for (var i = 0; i < questions.length; i++) {
        card.append("<div>" + questions[i].question + "</div>");
        for (var x = 0; x < questions[i].answers.length; x++) {
          card.append("<input class='card-body' type='radio' name='question-" + i +
          "' value='" + questions[i].answers[x] + "''>" + questions[i].answers[x]);
          console.log("how about here? spot 3");
        }
      }
  
      card.append("<button id='done'>done</button>");
    },
  
// go through each question, and attach it to the page, and connect it, so that when submitted, it will show the right and wrong score.
    done: function() {
    // first question, because it is in array position 0
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
        console.log("did you make it all the way down here? spot 4");
      }
      else {
        game.incorrect++;
      }
    });
    // second question, in array position 1
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // etc. etc.
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // etc. etc.
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // etc. etc.
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // etc. etc.
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // etc. etc.
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // etc. etc.
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
      
    });
    // etc. etc.
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
      
    });
    // etc. etc.
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
    

    // result: function() {

    //     clearInterval(timer);
    
    
    //     card.html("<h2>All Done!</h2>");
    //     card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    //     card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    //     card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    // }

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


    
    


// sets initial time for the questions to be completed to 60 seconds
// var time = 60;

// function timer() {
//     clock = setInterval(countDown, 1000);
//     function countDown() {
//         if (time < 1) {
//             clearInterval(clock);
//             userTimeout();
//         }
//         if (time > 0) {
//             time--;
//         }
//         $("#timer").html("<strong>" + time + "</strong>");
//     }};