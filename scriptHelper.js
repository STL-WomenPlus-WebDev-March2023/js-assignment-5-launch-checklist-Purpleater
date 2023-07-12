// Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = 
    
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src= '${imageUrl}'>`
    
}


function validateInput(testInput) {
    let returnString = "";

    if (isNaN(testInput.toString())) {
        returnString = "Not a Number"
    }
    if (!isNaN(testInput.toString())) {
        returnString = "Is a Number"
    }
    if (testInput.toString().trim().length == 0) {
        returnString = "Empty"
    }
    return returnString;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let validationErrorList = []

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus")

    // this ensures that the inputs of the form are not empty, specifying which are not valid 
    if (validateInput(pilot) != 'Not a Number') {
        validationErrorList.push("Pilot Name");
    }
    if (validateInput(copilot) != 'Not a Number') {
        validationErrorList.push("Copilot Name");
    }
    if (validateInput(fuelLevel) != "Is a Number") {
        validationErrorList.push("Fuel Level");
    }
    if (validateInput(cargoLevel) != "Is a Number") {
        validationErrorList.push("Cargo Mass");
    }

    if (validationErrorList.length != 0) {
        window.alert(`The following values you have provided are invalid: ${validationErrorList}`);
    }
    else {

        faultyItemsValidation = true;

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            faultyItemsValidation = false;
        }
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            faultyItemsValidation = false;
        }

        if (faultyItemsValidation == true) {
            list.style.visibility = "hidden";

            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "#419F6A";
        }
        else {
            list.style.visibility = "visible";

            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "#C7254E";
        }

        console.log("this is a placeholder to demonstrate my ongoing issue lol")
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
    .then(function (response) {
        return response.json()
    })

  return planetsReturned;
}


function pickPlanet(planets) {

    randomIndex = Math.floor(Math.random()*(planets.length))

    return randomIndex;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
