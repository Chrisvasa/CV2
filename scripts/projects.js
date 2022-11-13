let url = "data.json"; 
//'https://api.github.com/users/chrisvasa/repos?per_page=2&page=2'

getData();
hamburgerToggle();

async function getData() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();

        getImage(data.projects);
        getCurrentSlide(data.projects);
        printProject(data.projects, "projects")
    }
    else {
        console.log("HTTP-Error:" + response.status);
    }
}

function printProject(dataType, title) {
    let i = 0;

    dataType.forEach(value => {
        const out = document.querySelector('.portfolio-main-items').appendChild(document.createElement('div'))
        out.className = title + i;
        i++;
        for (const key in value) {
            let output = document.querySelector(`.${out.className}`).appendChild(document.createElement('p'))
            if (key == "image") {
                break;
            }
            output.textContent = value[key];
            output.className = key;
    }
})
}

//Image slider
function getCurrentSlide(data) {
    const sliderDots = document.querySelector('.slider-dots-container').children;
    Array.from(sliderDots).forEach(function(item) {
        item.addEventListener('click', function() {
            console.log(item)
            hideMenuItem(sliderDots)
            item.classList.add('activated')
            showMenuItem(item)
        })
    })
}

function hideMenuItem(mainMenuItems) {
    const subMenuItems = document.querySelector('.portfolio-main-items').children;

    Array.from(mainMenuItems).forEach(function(mainMenuItem) {
        mainMenuItem.classList.remove('activated')
    });

    Array.from(subMenuItems).forEach(function(item) {
        item.classList.add('hide');
    })
}

function showMenuItem(menuItem) {
    const subMenuItems = document.querySelector('.portfolio-main-items').children;
    
    const split = subMenuItems.className.split('-')
    const lastWord = split[split.length -1]
    const testing = document.querySelector(`.${lastWord}`)
    console.log(testing)

    menuItem.classList.remove('hide')
    menuItem.classList.add('activated')
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
        /* console.log(data[i].image) */
        portfolioImage.className = i;
        slider.className = i;

        if (i === 0) {
            slider.classList.add("activated");
            portfolioImage.style.display = "block"
        }
    }
}

