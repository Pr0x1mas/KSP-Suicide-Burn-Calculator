function sec2time(timeInSeconds) { // https://gist.github.com/vankasteelj/74ab7793133f4b257ea3
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-3);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + '.' + pad(milliseconds, 3);
}


// I decided to comment my code for a change. You're welcome

var calculatorOutput = document.getElementById("calculatorOutput");
var calculatorOutputContainer = document.getElementById("calculatorOutputContainer");


// Get all required input elements beforehand because apparently otherwise it causes performance issues and frankly lots of document.getElementById calls look messy
    // Planet info

var bodySelector = document.getElementById("bodySelector")
//var planetRadiusInput = document.getElementById("planetRadius");
//var planetMassInput = document.getElementById("planetMass");
var surfaceHeightInput = document.getElementById("surfaceHeight");

    // Craft info
var startHeightInput = document.getElementById("startHeight");
var fuelAmountInput = document.getElementById("fuelAmount")
var dryMassInput = document.getElementById("dryMass")
var thrustLimitInput = document.getElementById("thrustLimit")

    // Engine info
var engineSelector = document.getElementById("engineSelector")
//var engineThrustInput = document.getElementById("engineThrust")
//var engineISPInput = document.getElementById("engineISP")

// Constant(s)
var gravitationalConstant = 6.67E-11 // my main man newton coming in clutch with this absolute banger of a constant

function calculate(){
    calculatorOutput.innerHTML = "Calculating..."

    // now we actually get the values from all those input boxes

    //var planetRadius = parseFloat(planetRadiusInput.value);
    //var planetMass = parseFloat(planetMassInput.value);

    var planetRadius = celestialBodies[bodySelector.value].radius;
    var planetMass = celestialBodies[bodySelector.value].mass;
    var surfaceHeight = parseFloat(surfaceHeightInput.value);

    var startHeight = parseFloat(startHeightInput.value);
    var startFuelAmount = parseFloat(fuelAmountInput.value);
    var dryMass = parseFloat(dryMassInput.value);
    var thrustLimit = parseFloat(thrustLimitInput.value);

    var engineThrust = engines[engineSelector.value].thrustVac;
    var engineISP = engines[engineSelector.value].ISPVac;

    var craftMass;
    var fuelMass;
    var craftHeight;

    var status = "preFlight"; // what the ship is doing or last did before meeting its end
    var incidents = []; // list of what happened each iteration

    var startOffset = 0; // how long to wait before burning
    var precision = 1;
    var throttle = 5;
    var tolerance = 1; // how close we need to be to 0m/s at the target height

    var time;   // s
    var velocity; // m/s
    var acceleration; // m/s/s

    var engineAcceleration;
    var gravityAcceleration;
    var fuelConsumption;

    while (status != "landed") { // keep trying till we land
        status = "inFlight";

        time = 1;
        velocity = 0;
        acceleration = 0;

        craftHeight = startHeight;

        fuelMass = startFuelAmount * 5;
        craftMass = dryMass + fuelMass;
        fuelConsumption = engineThrust / (engineISP * 9.8);

        while (status == "inFlight") {
            if (time > startOffset) {
                throttle = thrustLimit;
            } else {
                throttle = 0; // only burn once we have waited
            }

            engineAcceleration = (engineThrust * throttle) / craftMass // a=f/m

            gravityAcceleration = (gravitationalConstant * ((craftMass * planetMass) / Math.pow(craftHeight + planetRadius, 2))) / craftMass; // f=gmM/r^2, a=f/m

            acceleration = engineAcceleration - gravityAcceleration; // engine thrusts up, gravity pulls down

            velocity += acceleration / precision; // accelerate the craft

            fuelMass -= (fuelConsumption * throttle) / precision; // subtract used fuel from mass
            craftMass = dryMass + fuelMass; // recalculate craft mass
            craftHeight += (velocity / precision); // move the craft
            time += 1/precision; // change the time

            if (Math.abs(velocity) <= tolerance && Math.abs(craftHeight) <= tolerance ) { // if we are close to the ground and moving slowly
                status = "landed";
            } else if (craftHeight < (surfaceHeight - tolerance)) {
                status = "crashed";
            } else if (fuelMass < 0 && throttle > 0) {
                status = "outOfFuel"
            }
        }

        incidents.push(status);

        if (status == "crashed" && incidents.length < 2){
            calculatorOutput.innerHTML = "Your engine is not powerful enough to stop the craft in time.";
            calculatorOutputContainer.setAttribute("class", "card bg-danger text-light")
            break; // we crashed even by burning the whole time so suicide burn is impossible
        } else if (status == "crashed" && incidents.at(-2) == "outOfFuel") {
            precision = precision * 2; // we have gone past the correct burn time
        }

        if (startOffset > time) {
            calculatorOutput.innerHTML = "You do not have enough fuel to complete the burn.";
            calculatorOutputContainer.setAttribute("class", "card bg-danger text-light")
            break; // we are crashing before we even start burning, if this has happened it's because we kept running out of fuel so there is not enough fuel regardless
        }

        if (status == "crashed") { // I'll make it a switch at some point but I was copying python code across
            startOffset = startOffset - (1/precision)*10; // If we crash, burn earlier
        } else if (status == "outOfFuel") {
            startOffset = startOffset + (1/precision)*10; // If we run out of fuel, burn later
        } else if (status == "landed") {
            calculatorOutput.innerHTML = "Start burning " + sec2time(startOffset) + " after drop"
            calculatorOutputContainer.setAttribute("class", "card bg-success text-light")
        }

    }

}