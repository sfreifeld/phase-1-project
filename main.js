// GLOBAL VARIABLES FOR QUESTIONS

// object that holds the questions and answers
const questionObject = [
    {
        question: 'Which one of these activities sounds the most fun?',
        answerComedy: 'Hanging out with friends',
        answerRomance: 'A long walk on the beach',
        answerAction: 'Skydiving',
        answerDrama: 'Reading a book',
        answerFamily: 'Playing a board game'
    },
    {
        question: 'Which drink sounds the best right now?',
        answerComedy: 'Soda',
        answerRomance: 'Tea',
        answerAction: 'Energy Drink',
        answerDrama: 'Water',
        answerFamily: 'Lemonade'
    },
    {
        question: 'If you could choose any career, what would you be?',
        answerComedy: 'Clown',
        answerRomance: 'Wedding Planner',
        answerAction: 'Racecar Driver',
        answerDrama: 'Lawyer',
        answerFamily: 'Teacher'
    },
    {
        question: 'If you could teleport anywhere, where would you go?',
        answerComedy: 'Comedy Club',
        answerRomance: 'Paris',
        answerAction: 'Amusement Park',
        answerDrama: 'Coffee Shop',
        answerFamily: 'Park'
    },
    {
        question: 'What type of protagonist do you typically root for?',
        answerComedy: 'The quirky underdog',
        answerRomance: 'The hopeless romantiic',
        answerAction: 'The fearless hero',
        answerDrama: 'The clever detective',
        answerFamily: 'The determined father'
    },
    {
        question: 'If you were a fruit, what type would you be?',
        answerComedy: 'Banana',
        answerRomance: 'Strawberry',
        answerAction: 'Passionfruit',
        answerDrama: 'Fig',
        answerFamily: 'Apple'
    }

]


// variables that holds the amount of points each genre has
let comedy = 0
let romance = 0
let action = 0
let drama = 0
let family = 0


// the genre of movie that will be suggested to the user, based on their input
let userGenre = ''

//variable that tracks the last selected button for each question, so that a user can only get one point per question
const lastSelectedGenres = {}

// variables for answer button
const buttons = document.querySelectorAll('.answer-button')
let selectedButton = ''

// variables for traversing buttons
const forwards = document.querySelector('#forwards')
const backwards = document.querySelector('#backwards')
const question = document.querySelector('#question')
const form = document.querySelector('#question-form')
const submitButton = document.querySelector('#question-form')

// variable to keep track of what question the user is on
let questionCounter = 0


// logic so that when a button is clicked, it's styling changed
buttons.forEach(button => {
    button.addEventListener('click',()=> {
        if (selectedButton) {
            selectedButton.className = 'unselected'
        }
        button.className = 'selected'
        selectedButton = button

        if (lastSelectedGenres[questionCounter] !== button.id) {
            // If a different genre was previously selected, decrement its count
            if (lastSelectedGenres[questionCounter]) {
                switch (lastSelectedGenres[questionCounter]) {
                    case 'comedy':
                        comedy > 0 ? comedy-- : comedy
                        break
                    case 'romance':
                        romance > 0 ? romance-- : romance
                        break
                    case 'action':
                        action > 0 ? action-- : action
                        break
                    case 'drama':
                        drama > 0 ? drama-- : drama
                        break
                    case 'family':
                        family > 0 ? family-- : family
                        break
                }
            }
    
            // Update the count for the newly selected genre
            switch (button.id) {
                case 'comedy':
                    comedy++
                    break
                case 'romance':
                    romance++
                    break
                case 'action':
                    action++
                    break
                case 'drama':
                    drama++
                    break
                case 'family':
                    family++
                    break
            }
            console.log("comedy: " + comedy)
            console.log("romance: " + romance)
            console.log("action: " + action)
            console.log("drama: " + drama)
            console.log("family: " + family)
            
            lastSelectedGenres[questionCounter] = button.id;
            }
    })
})





// QUESTION FUNCS

// handles question movement by combining the functions that handles moving forwards or backwards, displaying the correct questions and answer, and 
// displaying the direction buttons at the correct times
function questionTraverse(direction) {
    forwardsOrBackwards(direction)
    showQuestionAndAnswers()
    showCorrectButtons()
}

//shows traverseing buttons only when they can be used (ie doesn't show back button on first question)
function showCorrectButtons() {
    forwards.style.display = questionCounter === questionObject.length - 1 ? 'none' : 'block'
    backwards.style.display = questionCounter === 0 ? 'none' : 'flex'
    const submit = document.querySelector('#submit')
    submit.style.display = questionCounter === questionObject.length - 1 ? 'block' : 'none'
}

//keeps track if next or previous question depending on what button you press.  Does not DISPLAY question and answers.
function forwardsOrBackwards(direction) {
    buttons.forEach(button=> {
        button.className = 'unselected'
    })
    if (direction === "forwards") {
        questionCounter++
    }
    else if (direction === "backwards") {
        questionCounter--
    }
}

// shows questions and answers based on quuestionCounter
function showQuestionAndAnswers() {
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


// goes to next question
forwards.addEventListener('click', (event) => {
    event.preventDefault()
    questionTraverse("forwards")
    form.style.display = 'block'
})

// goes to previous question
backwards.addEventListener('click', (event) => {
    event.preventDefault()
    questionTraverse("backwards")
})

// determines what genre user should receive.  Looks at points for each genre and chooses one with the most.
function determineUserGenre() {
    const genres = [
        { name: 'Comedy', points: comedy },
        { name: 'Romance', points: romance },
        { name: 'Action', points: action },
        { name: 'Drama', points: drama },
        { name: 'Family', points: family }
    ]
    const maxPoints = Math.max(...genres.map(genre => genre.points))

    const topGenres = genres.filter(genre => genre.points === maxPoints)

    if (topGenres.length > 1) {
        const randomIndex = Math.floor(Math.random() * topGenres.length)
        userGenre = topGenres[randomIndex].name
    } else {
        userGenre = topGenres[0].name
    }

}

 // Call the function to determine the user's preferred genre and then find shows of that genre
submitButton.addEventListener('submit', (event) => {
    event.preventDefault()
       showLoadingPage();
    setTimeout(() => {
        determineUserGenre();
        findShows();
        setTimeout(hideLoadingPage, 3000); // Hide loading page after 3 seconds
    }, 500);
})


// 300 pages of tv maze api
//calls random page of the api that gets all the shows.  This is done as a workaround since we are not able to directly search by genre.  We will call a random page of the api, and iterate over each show until we have shows that match the user's genre.
// Limit the number of attempts to prevent infinite loops
function findShows(matchingShows = [], attempts = 0) {
    if (matchingShows.length >= 10 || attempts > 50) {
        console.log(matchingShows)
        console.log("show 1: " + matchingShows[0].name)
        console.log("show 2: " + matchingShows[1].name)
        console.log("show 3: " + matchingShows[2].name)

        addShowsToSuggestions(matchingShows)
        const suggestionContainer = document.querySelector('#suggestion-container')
        setTimeout(hideLoadingPage, 5000);
        displayInitialShows()
        
        return
    }

    let randomPage = Math.floor(Math.random() * 300) + 1
    fetch(`https://api.tvmaze.com/shows?page=${randomPage}`)
        .then((resp) => resp.json())
        .then((data) => {
            const englishShows = data.filter(show => show.language && show.language.includes("English"))
            const newMatchingShows = englishShows.filter(show => show.genres && show.genres.includes(userGenre))

            // Combine the newly found matching shows with any previously found ones
            const updatedMatchingShows = matchingShows.concat(newMatchingShows)

            // Recursively call findShows until the condition is met
            findShows(updatedMatchingShows, attempts + 1);
           
        }).catch(error => {
            console.error("Failed to fetch shows:", error);
        })
}



function addShowsToSuggestions(matchingShows) {
    matchingShows.forEach(show => {
        const showObject = {
            name: show.name,
            image: show.image ? show.image.original : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg',
            details: {
                genre: show.genres,
                description: show.summary
            }
        }
        suggestions.shows.push(showObject)
    })

}

// LOADING PAGE FUNCS
// Function to show the loading page
function showLoadingPage() {
    document.getElementById('suggestions-container').style.display = 'hidden';

    const loadingPage = document.getElementById('loading-page');
    loadingPage.style.display = 'flex';
    loadingPage.style.position = 'fixed';
    loadingPage.style.top = 0;
    loadingPage.style.left = 0;
    loadingPage.style.width = '100%';
    loadingPage.style.height = '100%';
    loadingPage.style.backgroundColor = '#da6638'; // Semi-transparent black background
    loadingPage.style.zIndex = 9999; 
    
    

    
}

function hideLoadingPage() {
    const loadingPage = document.getElementById('loading-page');
    loadingPage.style.display = 'none';
    // Show other elements
    document.getElementById('suggestions-container').style.display = 'flex';
    document.querySelector('h2').style.display = 'block';
}



// GLOBAL VARIABLES FOR SUGGESTIONS
const suggestions = {}
suggestions.shows = []

// Track the current index of the displayed shows
let currentIndex = 0
 // Number of shows to display initially
const numInitialShows = 3

// SUGGESTION FUNCS  

// Function to display the initial set of TV shows
function displayInitialShows() {
    const quizContainer = document.getElementById('questions-container');
    // Clear the container for questions
    quizContainer.innerHTML = '';
    const showContainer = document.getElementById('suggestions-container');
    // Clear the container for questions
    showContainer.innerHTML = '';
    showContainer.style.display = 'flex';

    // Create a heading to indicate the start of suggestions
    const heading= document.createElement('h2');
    heading.textContent = "Here are your suggestions:";
    const title = document.querySelector('#title');
    title.append(heading);

    // starts a loop to display first three shows
    for (let i = 0; i < numInitialShows; i++) {
        displayNextShow(showContainer);
    }
}

// Function to display the next TV show
function displayNextShow(showContainer) {
    // Get the next show from the suggestions
    const show = suggestions.shows[currentIndex];
    // Create a new div to hold the next show
    const showElement = document.createElement('div');
    showElement.classList = 'show';

    // Creates name and img for next show
    const name = document.createElement('h3');
    name.textContent = show.name;
    name.className = "show-name";
    const img = document.createElement('img');
    img.src = show.image;
    img.className = "show-image";

    // Create container to hold show's name and img
    const showInfoContainer = document.createElement('div');
    showInfoContainer.className = 'show-info'
    showInfoContainer.appendChild(name);
    showInfoContainer.appendChild(img);
    showElement.appendChild(showInfoContainer);
    showContainer.appendChild(showElement);

    // Add event listener to thumbs down image
    const dislike = document.createElement('i');
    dislike.className = 'fa-solid fa-x rating-button';
    ;

     name.prepend(dislike)
    dislike.addEventListener('click', () => {
        // Remove the current show 
        removeShow(showElement);
        // Display the next show 
        displayNextShow(showContainer);
    });
   

    // Add event listener to show container for hover
    img.addEventListener('mouseover', () => {
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'show-details';

        // Setting show details dynamically
        const genres = document.createElement('p');
        genres.textContent = `Genre: ${show.details.genre.join(', ')}`;

        const description = document.createElement('p');
        description.innerHTML = `Description: ${show.details.description || 'No description available'}`;

        // Append genre and description to show details
        detailsContainer.appendChild(genres);
        detailsContainer.appendChild(description);
        showInfoContainer.appendChild(detailsContainer);

        // Insert dislike button before name  
})

    // Remove event listener when mouse leaves image
    img.addEventListener('mouseleave', () => {
        const detailsContainer = showElement.querySelector('.show-details');
        if (detailsContainer) {
            detailsContainer.remove();
        }
    });

    currentIndex++; // Increment the current index 
    if (currentIndex >= suggestions.shows.length) {
        currentIndex = 0; // Reset index if we reached the end of the shows
    }
}

// Function to remove a show element
function removeShow(showElement) {
    showElement.remove();
}

