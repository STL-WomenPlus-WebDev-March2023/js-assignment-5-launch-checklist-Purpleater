window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returneasd by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = listedPlanets[pickPlanet(listedPlanets)];
        addDestinationInfo(document, planet.name, planet.diameter,planet.star, planet.distance,planet.moons, planet.image);

    })


    const submittedForm = document.querySelector("form");
    let faultyItemsList = document.getElementById("faultyItems");


    submittedForm.addEventListener("submit", (event) => {

        event.preventDefault()

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, faultyItemsList, pilot, copilot, fuelLevel, cargoMass);
        

    });


});
