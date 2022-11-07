let url = "data.json";

async function getData() {
    let response = await fetch(url);
    
    if (response.ok) {
        let data = await response.json();

        console.log(data);
    }
    else {
        console.log("HTTP-Error:" + response.status);
    }
}

getData();