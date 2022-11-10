let url = "data.json";

async function getData() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();

        console.log(data.work)

        for (let name in data) {
            for (let i = 0; i < data[name].length; i++) {
                /* console.log(data[name]) */
                console.log(data[name][i])
                document.querySelector('article').appendChild(document.createElement('p')).textContent = data[name][i].startDate
            }
        }

        console.log(data);
    }
    else {
        console.log("HTTP-Error:" + response.status);
    }
}

getData();

//test