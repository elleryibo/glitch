//Global Variables
//This is where you will define the variables you will be using in your project.
//TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var waterScore = 0;
var earthScore = 0;
var fireScore = 0;
var airScore = 0;

// variables for answer choice buttons for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for answer choice buttons for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//variable to get result h2 tag
var result = document.getElementById("result");

//variable to get restart button
var restart = document.getElementById("restart");
restart.addEventListener("click", restartGo);

//TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", air);
q1a2.addEventListener("click", fire);
q1a3.addEventListener("click", earth);
q1a4.addEventListener("click", water);

q2a1.addEventListener("click", water);
q2a2.addEventListener("click", fire);
q2a3.addEventListener("click", air);
q2a4.addEventListener("click", earth);

q3a1.addEventListener("click", fire);
q3a2.addEventListener("click", water);
q3a3.addEventListener("click", earth);
q3a4.addEventListener("click", air);

//TODO: Define quiz functions here
function water() {
  var temp = waterScore;
  waterScore += 1;
  questionCount += 1;
  disable(temp);
  //alert("One Point-Water");
  if (questionCount >= 3) {
    updateResult();
  }
}

function earth() {
  var temp = earthScore;
  earthScore += 1;
  questionCount += 1;
  disable(temp);
  //alert("One Point-Earth");
  if (questionCount >= 3) {
    updateResult();
  }
}

function fire() {
  var temp = fireScore;
  fireScore += 1;
  questionCount += 1;
  disable(temp);
  //alert("One Point-Fire");
  if (questionCount >= 3) {
    updateResult();
  }
}

function air() {
  var temp = airScore;
  airScore += 1;
  questionCount += 1;
  disable(temp);
  //alert("One Point-Air");
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (waterScore >= 2) {
    result.innerHTML = "You are a Waterbender!!";
  } else if (earthScore >= 2) {
    result.innerHTML = "You are an Earthbender!!";
  } else if (fireScore >= 2) {
    result.innerHTML = "You are a Firebender!!";
  } else if (airScore >= 2) {
    result.innerHTML = "You are an Airbender!";
  } else {
    result.innerHTML = "You are the Avatar, master of all 4 elements!";
  }
}

//to restart the quiz
function restartGo() {
  questionCount = 0;
  waterScore = 0;
  earthScore = 0;
  fireScore = 0;
  airScore = 0;
}

//to disable other optios after user has picked one
function disable(temp) {
  if (questionCount == 1) {
    if (waterScore == temp + 1) {
      document.getElementById("q1a1").disabled = true;
      document.getElementById("q1a2").disabled = true;
      document.getElementById("q1a3").disabled = true;
    } else if (earthScore == temp + 1) {
      document.getElementById("q1a1").disabled = true;
      document.getElementById("q1a2").disabled = true;
      document.getElementById("q1a4").disabled = true;
    } else if (fireScore == temp + 1) {
      document.getElementById("q1a1").disabled = true;
      document.getElementById("q1a3").disabled = true;
      document.getElementById("q1a4").disabled = true;
    } else if (airScore == temp + 1) {
      document.getElementById("q1a3").disabled = true;
      document.getElementById("q1a2").disabled = true;
      document.getElementById("q1a4").disabled = true;
    }
  } else if (questionCount == 2) {
    if (waterScore == temp + 1) {
      document.getElementById("q2a2").disabled = true;
      document.getElementById("q2a4").disabled = true;
      document.getElementById("q2a3").disabled = true;
    } else if (earthScore == temp + 1) {
      document.getElementById("q2a1").disabled = true;
      document.getElementById("q2a2").disabled = true;
      document.getElementById("q2a3").disabled = true;
    } else if (fireScore == temp + 1) {
      document.getElementById("q2a1").disabled = true;
      document.getElementById("q2a3").disabled = true;
      document.getElementById("q2a4").disabled = true;
    } else if (airScore == temp + 1) {
      document.getElementById("q2a1").disabled = true;
      document.getElementById("q2a2").disabled = true;
      document.getElementById("q2a4").disabled = true;
    }
  } else if (questionCount == 3) {
    if (waterScore == temp + 1) {
      document.getElementById("q3a1").disabled = true;
      document.getElementById("q3a4").disabled = true;
      document.getElementById("q3a3").disabled = true;
    } else if (earthScore == temp + 1) {
      document.getElementById("q3a1").disabled = true;
      document.getElementById("q3a2").disabled = true;
      document.getElementById("q3a4").disabled = true;
    } else if (fireScore == temp + 1) {
      document.getElementById("q3a2").disabled = true;
      document.getElementById("q3a3").disabled = true;
      document.getElementById("q3a4").disabled = true;
    } else if (airScore == temp + 1) {
      document.getElementById("q3a1").disabled = true;
      document.getElementById("q3a2").disabled = true;
      document.getElementById("q3a3").disabled = true;
    }
  }
}
