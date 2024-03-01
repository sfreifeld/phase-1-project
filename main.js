document.addEventListener('DOMContentLoaded', () => {
    displayShows()
})

const suggestions = {
    "shows": [
        {
            "name": "Community",
            "image": "https://m.media-amazon.com/images/S/pv-target-images/6845f803b2fe517cd2ddbdaa52150dde6920ff309530bee8d4e54bfd9e667c4b.jpg",
            "details": {
                "genre":"comedy"
            }
        },
        {
            "name": "Grey's Anatomy",
            "image": "https://static.wikia.nocookie.net/greysanatomy/images/7/77/Season12Poster2.jpg/revision/latest?cb=20150918074736",
            "details": {
                "genre":"drama"
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
                "genre":"action"
            }
        },
        {
            "name": "Peppa Pig",
            "image": "https://m.media-amazon.com/images/M/MV5BNDUyODQ0NjAtYTZjMS00MzBjLWI1ZjYtMzBhYzgyYzdjMTE4XkEyXkFqcGdeQXVyMzU5OTE2NTI@._V1_.jpg",
            "details": {
                "genre":"family"
            }
        },
                {
            "name": "Parks and Recreation",
            "image": "https://www.cleveland.com/resizer/opMMdXiOio0iPspiJDuvfXH5MAo=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/LGCO4GRDUBHW5O335IRSRFBS6I.jpg",
            "details": {
                "genre":"comedy"
            }
        },
                        {
            "name": "Downton Abbey",
            "image": "https://m.media-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
            "details": {
                "genre":"drama"
            }
        },
                                {
            "name": "Bluey",
            "image": "https://m.media-amazon.com/images/M/MV5BMDBiNDI3YjQtNDdkNS00ZDliLTlmMmQtMDE4ZWM1ZGIyNjljXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
            "details": {
                "genre":"family"
            }
        },
                                        {
            "name": "Ted Lasso",
            "image": "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
            "details": {
                "genre":"comedy"
            }
        },
                                                {
            "name": "The Flash",
            "image": "https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-flash-tv-poster.jpg",
            "details": {
                "genre":"action"
            }
        }
    ]
}


function displayShows() {
    const showContainer = document.getElementById('suggestion-container'); // Corrected ID
    showContainer.innerHTML = ''; // Clear previous content

    for (let i = 0; i < suggestions.shows.length; i += 3) {
        // Create a row to contain three shows
        const row = document.createElement('div');
        row.classList.add('row');

        // Loop through the next three shows
        for (let j = i; j < 3 && j < suggestions.shows.length; j++) {
            const show = suggestions.shows[j];

            const showElement = document.createElement('div');
            showElement.classList.add('show');

            const name = document.createElement('h3');
            name.textContent = show.name;

            const img = document.createElement('img');
            img.src = show.image;
            img.className = "show-image"

            // Append show element to row
            showElement.appendChild(name);
            showElement.appendChild(img);
            row.appendChild(showElement);
        }

        // Append row to show container
        showContainer.appendChild(row);
    }
}





    

  


