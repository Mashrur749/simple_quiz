var quizContainer   = document.querySelector("#quizContainer"),
	question 		= document.querySelector("#question"),
	opt1 			= document.querySelector("#opt1"),
	opt2		 	= document.querySelector("#opt2"),
	opt3 			= document.querySelector("#opt3"),
	opt4 			= document.querySelector("#opt4"),
	nextQ			= document.querySelector("#nextQ"),
	result			= document.querySelector("#result");

result.style.display = "none";
var currQuestion = 0,
	score 		 = 0,
	totQustion   = questions.length;
	
function loadQ(Qindex){
    question.textContent    = (Qindex+1) + ". " + questions[Qindex].question;
    opt1.textContent        = questions[Qindex].option1;
    opt2.textContent        = questions[Qindex].option2;
    opt3.textContent        = questions[Qindex].option3;
    opt4.textContent        = questions[Qindex].option4;
}

nextQ.onclick = function(){
    var selectedOption  = document.querySelector("input[type=radio]:checked");
    var corrAnswer      = questions[currQuestion].answer;
    
    if(!selectedOption){
        alert("Please Select Your Answer");
    }
    
    if(selectedOption.value == corrAnswer){
        score += 10;
    }
    selectedOption.checked = false;
    currQuestion++;
    if(currQuestion == totQustion){
        quizContainer.style.display = "none";
        result.style.display = "block";
        result.innerHTML = "Your total score is: " + score + " <br>Out of 100";
        return;
    }
    loadQ(currQuestion);
    
}

loadQ(currQuestion);

