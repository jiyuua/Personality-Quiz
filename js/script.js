/*Add your JavaScript here*/

var felineScore = 0;
var canineScore = 0;
var insectScore = 0;
var amphibianScore = 0;
var birdScore = 0;
var mysticalScore = 0;

var questionCount = 0;
var result = document.getElementById("result");

var restart = document.getElementById("restart");
/////////////////////////

/// Question DOM ///

// Q1 //

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q1a6 = document.getElementById("q1a6");

// Q2 //

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");

// Q3 //

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q3a6 = document.getElementById("q3a6");

// Q4 //

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");
var q4a6 = document.getElementById("q4a6");

// Q5 //

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");
var q5a6 = document.getElementById("q5a6");

/// Question Listener ///

q1a1.addEventListener("click", feline);
q1a2.addEventListener("click", insect);
q1a3.addEventListener("click", amphibian);
q1a4.addEventListener("click", canine);
q1a5.addEventListener("click", bird);
q1a6.addEventListener("click", mystical);

q2a1.addEventListener("click", canine);
q2a2.addEventListener("click", bird);
q2a3.addEventListener("click", insect);
q2a4.addEventListener("click", mystical);
q2a5.addEventListener("click", amphibian);
q2a6.addEventListener("click", feline);

q3a1.addEventListener("click", amphibian);
q3a2.addEventListener("click", canine);
q3a3.addEventListener("click", insect);
q3a4.addEventListener("click", mystical);
q3a5.addEventListener("click", bird);
q3a6.addEventListener("click", feline);

q4a1.addEventListener("click", bird);
q4a2.addEventListener("click", mystical);
q4a3.addEventListener("click", insect);
q4a4.addEventListener("click", canine);
q4a5.addEventListener("click", amphibian);
q4a6.addEventListener("click", feline);

q5a1.addEventListener("click", amphibian);
q5a2.addEventListener("click", bird);
q5a3.addEventListener("click", insect);
q5a4.addEventListener("click", canine);
q5a5.addEventListener("click", mystical);
q5a6.addEventListener("click", feline);

/// Diasable ///
// Q1 //
q1a1.addEventListener("click", disable1);
q1a2.addEventListener("click", disable1);
q1a3.addEventListener("click", disable1);
q1a4.addEventListener("click", disable1);
q1a5.addEventListener("click", disable1);
q1a6.addEventListener("click", disable1);

function disable1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a5.disabled = true;
  q1a6.disabled = true;
}

// Q2 //
q2a1.addEventListener("click", disable2);
q2a2.addEventListener("click", disable2);
q2a3.addEventListener("click", disable2);
q2a4.addEventListener("click", disable2);
q2a5.addEventListener("click", disable2);
q2a6.addEventListener("click", disable2);

function disable2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a5.disabled = true;
  q2a6.disabled = true;
}

// Q3 //
q3a1.addEventListener("click", disable3);
q3a2.addEventListener("click", disable3);
q3a3.addEventListener("click", disable3);
q3a4.addEventListener("click", disable3);
q3a5.addEventListener("click", disable3);
q3a6.addEventListener("click", disable3);

function disable3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a5.disabled = true;
  q3a6.disabled = true;
}

// Q4 //
q4a1.addEventListener("click", disable4);
q4a2.addEventListener("click", disable4);
q4a3.addEventListener("click", disable4);
q4a4.addEventListener("click", disable4);
q4a5.addEventListener("click", disable4);
q4a6.addEventListener("click", disable4);

function disable4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
  q4a5.disabled = true;
  q4a6.disabled = true;
}

// Q5 //
q5a1.addEventListener("click", disable5);
q5a2.addEventListener("click", disable5);
q5a3.addEventListener("click", disable5);
q5a4.addEventListener("click", disable5);
q5a5.addEventListener("click", disable5);
q5a6.addEventListener("click", disable5);

function disable5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
  q5a5.disabled = true;
  q5a6.disabled = true;
}

/// Restart Var ///
restart.addEventListener("click", restartQuiz);

/// Defined Functions ///

function feline() {
  felineScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "felineScore =" + felineScore);

  if (questionCount == 5){
    console.log("Brewing up results...")
    updateResult();
  }
}

function canine() {
  canineScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "canineScore =" + canineScore);
  
  if (questionCount == 5){
    console.log("Brewing up results...")
    updateResult();
  }
}

function insect() {
  insectScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "insectScore =" + insectScore);

  if (questionCount == 5){
    console.log("Brewing up results...")
    updateResult();
  }
}

function amphibian() {
  amphibianScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "amphibianScore =" + amphibianScore);

  if (questionCount == 5){
    console.log("Brewing up results...")
    updateResult();
  }
}

function bird() {
  birdScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "birdScore =" + birdScore);

  if (questionCount == 5){
    console.log("Brewing up results...")
    updateResult();
  }  
}

function mystical() {
  mysticalScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "mysticalScore =" + mysticalScore);

  if (questionCount == 5){
    console.log("Brewing up results...")
    updateResult();
  }
}
  
      
/// updateResult Function ///

function updateResult() {
  if (felineScore >= 2) {
    result.innerHTML = "You have a feline familiar! They can be fierce but very fluffy on the inside. From lions to cats, they are a wonderful companion to have!";
    console.log("You have a feline familiar! They can be fierce but very fluffy on the inside. From lions to cats, they are a wonderful companion to have!")
    
    document.getElementById("showcat").style.visibility = "visible";
  
  } else if (canineScore >= 2) {
    result.innerHTML = "You have a canine familiar! From wolves to foxes, they are a wonderful companion to have! Remember to give them lots of pets.";
    console.log("You have a canine familiar! From wolves to foxes, they are a wonderful companion to have! Remember to give them lots of pets.")
  
    document.getElementById("showdog").style.visibility = "visible";

  } else if (insectScore >= 2) {
    result.innerHTML = "You have an insect familiar! They may be small but don't underestimate them. From butterflies to ladybugs, they are a wonderful companion to have!";
    console.log("You have an insect familiar! They may be small but don't underestimate them. From butterflies to ladybugs, they are a wonderful companion to have!")
  
    document.getElementById("showbug").style.visibility = "visible";
  
  } else if (amphibianScore >= 2) {
    result.innerHTML = "You have an amphibian familiar! These critters can be slimey but don't let that put you off. From frogs to salamanders, they are a wonderful companion to have!";
    console.log("You have an amphibian familiar! These critters can be slimey but don't let that put you off. From frogs to salamanders, they are a wonderful companion to have!")
  
    document.getElementById("showfrog").style.visibility = "visible";

  } else if (mysticalScore >= 2) {
    result.innerHTML = "You have a mystical familiar! These are rare creatures that wanders the myths. From unicorns to dragons, they are a wonderful companion to have!";
    console.log("You have a mystical familiar! These are rare creatures that wanders the myths. From unicorns to dragons, they are a wonderful companion to have!")
  
    document.getElementById("showdragon").style.visibility = "visible";  
  } else if (birdScore >= 2) {
    result.innerHTML = "You have a bird familiar! Listen along to their chirps. From crows to parrots, they are a wonderful companion to have!";
    console.log("You have a bird familiar! Listen along to their chirps. From crows to parrots, they are a wonderful companion to have!")
 
    document.getElementById("showbird").style.visibility = "visible";

  } else {
    result.innerHTML = "The summoning didn't work! Better luck next time.";
    console.log("The summoning didn't work! Better luck next time.")
  }
} 

function hideimg(){
  document.querySelectorAll('.showimgs img').forEach(img =>{
    img.style.visibility = "hidden";
  });
}

/// Restart Function ///
function restartQuiz() {
  result.innerHTML = "Your result is...";
  felineScore = 0;
  canineScore = 0;
  insectScore = 0;
  amphibianScore = 0;
  birdScore = 0;
  mysticalScore = 0;
  questionCount = 0;

  // Enable //
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q1a5.disabled = false;
  q1a6.disabled = false;
  ///
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q2a5.disabled = false;
  q2a6.disabled = false;
  ///
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q3a5.disabled = false;
  q3a6.disabled = false;
  ///
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q4a5.disabled = false;
  q4a6.disabled = false;
  ///
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q5a5.disabled = false;
  q5a6.disabled = false;
  ///
  
  console.log("questionCount = " + questionCount + "felineScore =" + felineScore + questionCount + "canineScore =" + canineScore + questionCount + "insectScore =" + insectScore + questionCount + "amphibianScore =" + amphibianScore + questionCount + "birdScore =" + birdScore + questionCount + "mysticalScore =" + mysticalScore);
  hideimg();
}

