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

    // make sure that the input values are correct
    let validation = true;

    if (validateInput(pilot) != "Not a Number" ||
        validateInput(copilot) != "Not a Number" ||
        validateInput(fuelLevel) != "Is a Number" ||
        validateInput(cargoLevel) != "Is a Number") {
        validation = false;
    }

    if (validation == false) {
        window.alert("One or more fields feature an invalid input.");
    }
    else{
        list.style.visibility="visible";
    }

    // update the launch list

    
    

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
