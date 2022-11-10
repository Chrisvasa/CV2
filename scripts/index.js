let url = "data.json";

async function getData() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();

        console.log(data.about.location)
        printWork(data.work, "work")
        printWork(data.education, "education")
        printWork(data.skills, "skills")
    }
    else {
        console.log("HTTP-Error:" + response.status);
    }
}

getData();
hamburgerToggle();

function printWork(dataType, title) {
    const out = document.querySelector('main').appendChild(document.createElement('div'))
    out.className = title;
    document.querySelector(`.${out.className}`).appendChild(document.createElement('h3')).textContent = title.toUpperCase();
    dataType.forEach(value => {
        for (const key in value) {
            let output = document.querySelector(`.${out.className}`).appendChild(document.createElement('p'))
            output.textContent = value[key];
            output.className = key;
        }
    });
}

function hamburgerToggle() {
    const hamburgerClick = document.querySelector('.nav-toggle');
    hamburgerClick.addEventListener('click', function() {
        const navContainer = document.querySelector('.nav-button-container');
        navContainer.classList.toggle('hidden');
    })
}
