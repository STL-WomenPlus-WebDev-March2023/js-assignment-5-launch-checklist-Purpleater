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





<<<<<<< HEAD

});
=======
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


>>>>>>> ecdffb0576d72b1efe4cba47f6c66e8fa6eea3d6
