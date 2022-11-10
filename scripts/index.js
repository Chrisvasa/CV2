let url = "data.json";

async function getData() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();

        console.log(data.work)

        printWork(data, work)
    }
    else {
        console.log("HTTP-Error:" + response.status);
    }
}

getData();

function printWork(data, dataType) {
    const objType = dataType;
    for (let i = 0; i < data.objType.length; i++) {
        document.querySelector('article').appendChild(document.createElement('h3')).textContent = data.objType[i].name
        document.querySelector('article').appendChild(document.createElement('h4')).textContent = data.objType[i].startDate
        document.querySelector('article').appendChild(document.createElement('h4')).textContent = data.objType[i].endDate
        document.querySelector('article').appendChild(document.createElement('p')).textContent = data.objType[i].description
    }
}

//test