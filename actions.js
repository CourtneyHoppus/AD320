function switchSides() {
    var sideA = document.getElementById("localAction");
    var sideB = document.getElementById("onlineAction");
    if (sideA.className === "left") {
        sideA.className = "right";
        sideB.className = "left";
    } else if (sideA.className === "right") {
        sideA.className = "left";
        sideB.className = "right";
    }
}

function getQuote() {
    var quotes = document.getElementById("onlineAction");
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then(response => {
        return response.json()
    })
    .then(json => {
        quotes.innerText = "\"" + json.quote + "\"" + " Author: " + json.author;
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
}