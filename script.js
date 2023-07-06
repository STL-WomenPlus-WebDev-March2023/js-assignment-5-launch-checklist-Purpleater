// Write your JavaScript code here!

window.addEventListener("load", function () {

    const submitButton = document.getElementById("formSubmit")

    let list = document.getElementById("faultyItems");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })


    submitButton.addEventListener("click", function () {

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input=[name=copilotName]").value;
        let fuelLevel = document.querySelector("input=[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input=[name=cargoMass]").value;
        


    });

});


