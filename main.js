
// object that holds the questions and answers
const questionObject = [
    {
        question: 'What kind of show do you want to watch?',
        answerComedy: 'Comedy',
        answerRomance: 'Romance',
        answerAction: 'Action',
        answerDrama: 'Drama',
        answerFamily: 'Family'
    },
    {
        question: 'What is another type of show that you want to watch?',
        answerComedy: 'Comedy2',
        answerRomance: 'Romance2',
        answerAction: 'Action2',
        answerDrama: 'Drama2',
        answerFamily: 'Family2'
    },
    {
        question: 'Another question about your favorite show?',
        answerComedy: 'Comedy3',
        answerRomance: 'Romance3',
        answerAction: 'Action3',
        answerDrama: 'Drama3',
        answerFamily: 'Family3'
    }
]

// variables that holds the amount of points each genre has
let comedy = 0
let romance = 0
let action = 0
let drama = 0
let family = 0


// logic that shows which answer is selected
const buttons = document.querySelectorAll('.answer-button')
let selectedButton = ''

buttons.forEach(button => {
    button.addEventListener('click',()=> {
        if (selectedButton) {
            selectedButton.className = 'unselected'
        }
        button.className = 'selected'
        selectedButton = button
    })
})




// logic that causes forwards button to show the next question and answers
const forwards = document.querySelector('#forwards')
const backwards = document.querySelector('#backwards')
const question = document.querySelector('#question')

// tracks what question we are currently on
let questionCounter = 0

// either adds one or subtracts one from questionCounter
function questionTraverse(direction) {
    buttons.forEach(button=> {
        button.className = 'unselected'
    })

    if (direction === "forwards") {
        questionCounter++
    }
    else if (direction === "backwards") {
        questionCounter--
    }
    questionCounter 
    question.textContent = questionObject[questionCounter].question
    const comedyButton = document.querySelector('#comedy')
    comedyButton.textContent = questionObject[questionCounter].answerComedy

    const romanceButton = document.querySelector('#romance')
    romanceButton.textContent = questionObject[questionCounter].answerRomance

    const actionButton = document.querySelector('#action')
    actionButton.textContent = questionObject[questionCounter].answerAction

    const dramaButton = document.querySelector('#drama')
    dramaButton.textContent = questionObject[questionCounter].answerDrama

    const familyButton = document.querySelector('#family')
    familyButton.textContent = questionObject[questionCounter].answerFamily



}




forwards.addEventListener('click', ()=> {
    questionTraverse("forwards")


})

backwards.addEventListener('click', ()=> {
    questionTraverse("backwards")

})





