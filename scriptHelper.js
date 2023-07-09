// Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}


function validateInput(testInput) {
    let returnString = "";

    if (isNaN(testInput)) {
        returnString = "Not a Number"
    }
    if (!isNaN(testInput)) {
        returnString = "Is a Number"
    }
    if (testInput.trim().length == 0) {
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
    if (validateInput(pilot) != 'Not a Number'){
        validationErrorList.push("Pilot Name");
    }
    if(validateInput(copilot) != 'Not a Number'){
        validationErrorList.push("Copilot Name");
    }
    if(validateInput(fuelLevel) != "Is a Number"){
        validationErrorList.push("Fuel Level");
    }
    if (validateInput(cargoLevel) != "Is a Number"){
        validationErrorList.push("Cargo Mass");
    }

    if (validationErrorList.length != 0){
        window.alert(`The following values you have provided are invalid: ${validationErrorList}`);
    }
    else{

        faultyItemsValidation = true;

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000){
            fuelStatus.innerHTML = "Fuel level too low for launch";
            faultyItemsValidation = false;
        }
        if (cargoLevel > 10000){
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            faultyItemsValidation = false;
        }

        if (faultyItemsValidation == true){
            list.style.visibility = "hidden";

            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";            
        }
        else{
            list.style.visibility = "visible";

            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }

        

    }




}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
