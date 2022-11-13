let url = "data.json"; 
//'https://api.github.com/users/chrisvasa/repos?per_page=2&page=2'

getData();
hamburgerToggle();

async function getData() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();

        getImage(data.projects);
        getCurrentSlide();
    }
    else {
        console.log("HTTP-Error:" + response.status);
    }
}

//Image slider
function getCurrentSlide() {
    const sliderDots = document.querySelector('.slider-dots-container').children;
    Array.from(sliderDots).forEach(function(item) {
        console.log("test")
        item.addEventListener('click', function() {
            item.classList.add("activated")
        })
    })
}

// Toggle for the hamburger menu
function hamburgerToggle() {
    const hamburgerClick = document.querySelector('.nav-toggle');
    hamburgerClick.addEventListener('click', function() {
        const navContainer = document.querySelector('.nav-button-container');
        navContainer.classList.toggle('hidden');
    })
}

// Gets the project image from JSON file
function getImage(data) {
    for (i = 0; i < data.length; i++) {
        const portfolioImage = document.querySelector('.portfolio-container').appendChild(document.createElement('img'));
        const slider = document.querySelector('.slider-dots-container').appendChild(document.createElement('span'));

        portfolioImage.src = data[i].image;
        portfolioImage.className = i;
        slider.className = i;

        if (i === 0) {
            slider.classList.add("activated");
            portfolioImage.style.display = "block"
        }
    }
}

