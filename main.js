
//variable that will hold the array of show objects, which we will show
const suggestions = {}
suggestions.shows = []


let currentIndex = 0; // Track the current index of the displayed shows
const numInitialShows = 3; // Number of shows to display initially

function displayInitialShows() {
    const quizContainer = document.getElementById('questions-container');
    quizContainer.innerHTML = '';
    const showContainer = document.getElementById('suggestions-container');
    showContainer.innerHTML = '';

    const heading= document.createElement('h2');
    heading.textContent = "Here are your suggestions:";
    quizContainer.append(heading);

    for (let i = 0; i < numInitialShows; i++) {
        displayNextShow(showContainer);
    }
}

function displayNextShow(showContainer) {
    const show = suggestions.shows[currentIndex];
    const showElement = document.createElement('div');
    showElement.classList = 'show';

    const name = document.createElement('h3');
    name.textContent = show.name;
    name.className = "show-name";

    const img = document.createElement('img');
    img.src = show.image;
    img.className = "show-image";

    // Append show element to row
    showElement.appendChild(name);
    showElement.appendChild(img);
    showContainer.appendChild(showElement);

    // Add event listener to thumbs down image
    const dislike = document.createElement('img');
    dislike.src = 'dislike_11823958.png';
    dislike.className = 'rating-button';
    dislike.addEventListener('click', () => {
        removeShow(showElement);
        displayNextShow(showContainer);
    });

    const ratingContainer = document.createElement('div'); // Create a container for rating buttons
    ratingContainer.className = 'rating-container';
    ratingContainer.appendChild(dislike); // Append dislike button to container

    const like = document.createElement('img');
    like.src = 'like_11823953.png';
    like.className = 'rating-button';
    ratingContainer.appendChild(like); // Append like button to container

    showElement.appendChild(ratingContainer); // Insert rating container after show image

    // Add event listener to show container for hover
    img.addEventListener('mouseover', () => {
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'show-details';

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${show.details.genre}`;

        const description = document.createElement('p');
        description.textContent = `Description: ${show.details.description || 'No description available'}`;

        detailsContainer.appendChild(genre);
        detailsContainer.appendChild(description);

        showElement.appendChild(detailsContainer);
    });

    // Remove event listener when mouse leaves image
    img.addEventListener('mouseleave', () => {
        const detailsContainer = showElement.querySelector('.show-details');
        if (detailsContainer) {
            detailsContainer.remove();
        }
    });

    currentIndex++;
    if (currentIndex >= suggestions.shows.length) {
        currentIndex = 0; // Reset index if we reached the end of the shows
    }
}


function removeShow(showElement) {
    showElement.remove();
}

function rateShow() {
    const shows = document.querySelectorAll('.show');

    shows.forEach(show => {
        const showImg = show.querySelector('.show-image');
    });
}


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




// logic that causes forwards and backwards button to show the correct question and answers
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

    //logic that only shows submit button on the last question
    forwards.style.display = questionCounter === questionObject.length - 1 ? 'none' : 'block'
    backwards.style.display = questionCounter === 0 ? 'none' : 'flex'
    submitButton.style.display = questionCounter === questionObject.length - 1 ? 'block' : 'none'

    
    


}




forwards.addEventListener('click', ()=> {
    questionTraverse("forwards")


})

backwards.addEventListener('click', ()=> {
    questionTraverse("backwards")

})


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
        // If there's no tie, just assign the top genre
        userGenre = topGenres[0].name
    }

}

const submitButton = document.querySelector('#submit')

 // Call the function to determine the user's preferred genre and then find shows of that genre
submitButton.addEventListener('click', () => {
    determineUserGenre();
    console.log(userGenre);
    findShows()
});



// 300 pages of tv maze api
//calls random page of the api that gets all the shows.  This is done as a workaround since we are not able to directly search by genre.  We will call a random page of the api, and iterate over each show until we have shows that match the user's genre.
// Limit the number of attempts to prevent infinite loops
function findShows(matchingShows = [], attempts = 0) {
    if (matchingShows.length >= 10 || attempts > 50) {
        console.log(matchingShows);
        console.log("show 1: " + matchingShows[0].name);
        console.log("show 2: " + matchingShows[1].name);
        console.log("show 3: " + matchingShows[2].name);

        //for each show in matchingShows array, make object
        matchingShows.forEach(show => {
            suggestions.shows.push({
                name: show.name,
                image: show.image.original,
                details: {
                    genre: show.genre,
                    description: show.summary
                }
        })
    })

        const suggestionContainer = document.querySelector('#suggestion-container')
        displayInitialShows()
        suggestionContainer.style.display = 'flex'
        return;
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