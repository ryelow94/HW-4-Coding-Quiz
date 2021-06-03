 
var timerId;
var timeEl = document.getElementById("time")
var startingScreen = document.getElementById("starting-screen");
var startingButton = document.getElementById("starting-button");
var quizScreen = document.getElementById("quiz-screen")
var questionsEl = document.getElementById("questions"); 
var time = questions.length * 15;
var choices = document.getElementById("choices"); 
var choicesEl = document.querySelector("#choices");
var currentQuestionIndex = 0; 

//start the game by hiding the starting screen with the button
startingButton.addEventListener("click", handleStartButtonClick); 

function handleStartButtonClick(){ 
   startingScreen.setAttribute("class", "hide"); 
   quizScreen.setAttribute("class", "show"); 
   timerId = setInterval(tick, 1000);
   timeEl.textContent = time;

    askQuestion()
} 
//set timer to decrease by a second and to end game if it reaches 0
function tick() {
    time--; 
    timeEl.textContent = time; 

    if (time <= 0) {
        endQuiz()
    }
}


// create a function to ask questions
function askQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var questionHeader = document.getElementById("question-header"); 
    console.log(currentQuestion.header)
    questionHeader.textContent = currentQuestion.header; 
    choices.innerHTML = "";
    currentQuestion.choices.forEach(function(choice,i){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice) 

        choiceBtn.textContent = i + 1 + ". " + choice; 

        choiceBtn.onclick = questionAnswer; 

        choicesEl.appendChild(choiceBtn);
    }); 
    
}  

function questionAnswer(event) {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -=5; 
        
    } else {
        time +=5
    }
    currentQuestionIndex++; 
    if (currentQuestionIndex === questions.length) { 
        endQuiz()
        
    } else {
        askQuestion()
    }
} 
timeEl.textContent = time;  

 

if(currentQuestionIndex === questions.length) {
    endQuiz();
} else { 
    askQuestion(); 
}

function endQuiz() { 
    clearInterval(timerId); 

    var quizEnd = document.getElementById("quiz-end"); 
    quizEnd.setAttribute("class", "show"); 
    var scoreEl = document.getElementById("score") 
    scoreEl.textContent = time; 
    quizScreen.setAttribute("class", "hide"); 
    
} 
var tryAgainBtn = doucument.getElementById("try-again-button"); 
    


