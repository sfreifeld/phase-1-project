const suggestions = {
    "shows": [
        {
            "name": "Community",
            "image": "https://m.media-amazon.com/images/S/pv-target-images/6845f803b2fe517cd2ddbdaa52150dde6920ff309530bee8d4e54bfd9e667c4b.jpg",
            "details": {
                "genre": "comedy",
                "description": "A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body."
            }
        },
        {
            "name": "Grey's Anatomy",
            "image": "https://static.wikia.nocookie.net/greysanatomy/images/7/77/Season12Poster2.jpg/revision/latest?cb=20150918074736",
            "details": {
                "genre": "drama",
                "description": "A drama centered on the personal and professional lives of five surgical interns and their supervisors."
            }
        },
        {
            "name": "Bridgerton",
            "image": "https://resizing.flixster.com/Zdvk-xZ3cN7uIJGvqPcuAijAb1U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvOWQyNzdiMGEtZmZhYi00YmZjLTkxZDktNDFlMjFhNjZkZmYwLmpwZw==",
            "details": {
                "genre":"romance"
            }
        },
        {
            "name": "The Walking Dead",
            "image": "https://assets-prd.ignimgs.com/2021/10/08/thewalkingdead-1633729801542.png",
            "details": {
                "genre": "action",
                "description": "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society."
            }
        },
        {
            "name": "Peppa Pig",
            "image": "https://m.media-amazon.com/images/M/MV5BNDUyODQ0NjAtYTZjMS00MzBjLWI1ZjYtMzBhYzgyYzdjMTE4XkEyXkFqcGdeQXVyMzU5OTE2NTI@._V1_.jpg",
            "details": {
                "genre": "family",
                "description":"A little pig named Peppa and her little brother George have journeys everyday with their family and friends."
            }
        },
                {
            "name": "Parks and Recreation",
            "image": "https://www.cleveland.com/resizer/opMMdXiOio0iPspiJDuvfXH5MAo=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/LGCO4GRDUBHW5O335IRSRFBS6I.jpg",
            "details": {
                "genre": "comedy",
                "description": "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place."
            }
        },
                        {
            "name": "Downton Abbey",
            "image": "https://m.media-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
            "details": {
                "genre": "drama",
                "description":"The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place."
            }
        },
                                {
            "name": "Bluey",
            "image": "https://m.media-amazon.com/images/M/MV5BMDBiNDI3YjQtNDdkNS00ZDliLTlmMmQtMDE4ZWM1ZGIyNjljXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
            "details": {
                "genre": "family",
                "description": "The slice-of-life adventures of an Australian Blue Heeler Cattle Dog puppy as she has fun with her family and friends in everyday situations."
            }
        },
                                        {
            "name": "Ted Lasso",
            "image": "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
            "details": {
                "genre": "comedy",
                "description":"American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League soccer team."
            }
        },
                                                {
            "name": "The Flash",
            "image": "https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-tv-poster.jpg",
            "details": {
                "genre": "action",
                "description": "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, and fighting crime in Central City."
            }
        }
    ]
}


document.addEventListener('DOMContentLoaded', () => {
    displayInitialShows();
    rateShow();
});

let currentIndex = 0; // Track the current index of the displayed shows
const numInitialShows = 3; // Number of shows to display initially

function displayInitialShows() {
    const showContainer = document.getElementById('suggestion-container');
    showContainer.innerHTML = '';

    const heading= document.createElement('h2');
    heading.textContent = "Here are your suggestions";
    showContainer.append(heading);

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


