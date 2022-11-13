let url = "data.json";
let headerDesc = document.querySelector('header').appendChild(document.createElement('p'))
document.querySelector('main').appendChild(document.createElement('div')).className = "main-container";
document.querySelector('main').appendChild(document.createElement('div')).className = "main-container-items";

getData();
hamburgerToggle();
/* setTimeout(() => {
    readMenuClick();
}, 150); */ // Temporary fix -- Make it run after getData() is complete
// Also show loading for slower speeds

async function getData() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();

        printWork(data.projects, "Project1", 0, "default") // This will be the default shown on page load
        printWork(data.projects, "Project2", 1)
        readMenuClick();
    }
    else {
        console.log("HTTP-Error:" + response.status);
    }
}

// Prints out the given section from the JSON file and gives it suiting class names and titles
function printWork(dataType, title, number,  selected) {
    const divTitle = document.querySelector(`.main-container`).appendChild(document.createElement('div'))
    divTitle.className = `main-item-${title}`;

    const titleOut = document.querySelector(`.main-item-${title}`).appendChild(document.createElement('h3'))
    const out = document.querySelector('.main-container-items').appendChild(document.createElement('div'))

    titleOut.className = title + "-title";
    titleOut.textContent = title.toUpperCase();
    out.className = title;

        for (const key in dataType[number]) {
            if (key == "image") {
                break;
            }
            let output = document.querySelector(`.${out.className}`).appendChild(document.createElement('p'))
            output.textContent = dataType[number][key];
            output.className = key;
        };

    if (selected === "default") {
        divTitle.className += " selected";
    }
    else {
        out.className = title + ` hide`;
    }
}

// Toggle for the hamburger menu
function hamburgerToggle() {
    const hamburgerClick = document.querySelector('.nav-toggle');
    hamburgerClick.addEventListener('click', function() {
        const navContainer = document.querySelector('.nav-button-container');
        navContainer.classList.toggle('hidden');
    })
}

// Reads which of the menu items the user has clicked
function readMenuClick() {
    const mainMenuItems = document.querySelector('.main-container').children;

    Array.from(mainMenuItems).forEach(function(mainMenuItem) {
        mainMenuItem.addEventListener('click', function() {
            hideMenuItem(mainMenuItems);
            showMenuItem(mainMenuItem);
        })
    })
}

// Removes "selected" from classList and adds "hide" to classList
// Will hide the menu items, so that only one item at a time is shown
function hideMenuItem(mainMenuItems) {
    const subMenuItems = document.querySelector('.main-container-items').children;

    Array.from(mainMenuItems).forEach(function(mainMenuItem) {
        mainMenuItem.classList.remove('selected')
    });

    Array.from(subMenuItems).forEach(function(item) {
        item.classList.add('hide');
    })
}

// Removes "hide" from classList and adds "selected" to classList
// Which will show the menuItem that has been selected by the user
function showMenuItem(menuItem) {
    const split = menuItem.className.split('-')
    const lastWord = split[split.length -1]
    const testing = document.querySelector(`.${lastWord}`)
    console.log(menuItem)

    testing.classList.remove('hide');
    menuItem.classList.add('selected')
}


