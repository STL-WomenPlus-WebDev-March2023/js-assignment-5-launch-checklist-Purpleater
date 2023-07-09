window.addEventListener("load", function () {


    /*
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }
    
    */

  
    const submittedForm = document.querySelector("form");
    let faultyItemsList = document.getElementById("faultyItems");


    submittedForm.addEventListener("submit", function() {

        pilot = document.querySelector("input[name=pilotName]").value;
        copilot = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, faultyItemsList, pilot, copilot, fuelLevel, cargoMass)


    });
});
