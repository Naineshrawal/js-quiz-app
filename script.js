const questions = [
    {
        question :"Which is the capital of pakistan" , 
        answers : [
            {text: 'karanchi', correct: false },
            {text: 'rawalpindi', correct: false },
            {text: 'islamabad', correct: true },
            {text: 'hyderabad', correct: false }
        ]
    },
    {
        question :"Which is the capital of Australia" , 
        answers : [
            {text: 'sydney', correct: false },
            {text: 'canbera', correct: true },
            {text: 'perth', correct: false },
            {text: 'malbourne', correct: false }
        ]
    },
    {
        question :"Which is the capital of iran" , 
        answers : [
            {text: 'Mashhad', correct: false },
            {text: 'Tabriz', correct: false },
            {text: 'Tehran', correct: true },
            {text: 'Isfahan', correct: false }
        ]
    },
    {
        question :"Which is the capital of Arunachal Pradesh" , 
        answers : [
            {text: 'Itanagar', correct: true },
            {text: 'GandhiGram', correct: false },
            {text: 'Chowkham', correct: false },
            {text: 'Bameng', correct: false }
        ]
    }
];

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('ans-btn')
const nextButton = document.getElementById('nxt-btn')

let currentQuestionIndex = 0;
let score = 0



// execution 1
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = 'Next'
    showQuestion();

}

function resetState(){
    nextButton.style.display = 'none'

    
    while(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)
}


// execution 2  
function showQuestion(){
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ '. ' + currentQuestion.question


    currentQuestion.answers.forEach(answer => {
    
    const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        
        button.addEventListener('click', selectAnswer)
    })
}









function selectAnswer(e){
    const selectedBtn = e.target
    // console.log(e.target);
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
// console.log(Array.from(answerButtons.children));
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block'
}






function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score is ${score} out of ${currentQuestionIndex}`
    nextButton.innerHTML= 'Play Again'
    nextButton.style.display = 'block'
}







function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore();

    }
}









nextButton.addEventListener("click", ()=> {
    // console.log(currentQuestionIndex);
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})



// execution 0
startQuiz();