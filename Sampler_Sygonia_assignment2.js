//alert("JavaScript works!");

// Sygonia Y. Sampler
// SDI 140906
// Section 02
// Assignment 1
// Story in JavaScript

// My variables
var firstSergeantName = " Ramon Scott";
var firstSergeantFullName = "1SG Scott";
var companyName = "Big Dawgs";
var wrong = "beat your face";
var callout = "who you wit";
var answer = "Big Dawgs who you wit";


function greeting()
{
    return "Good Morning 1SG";
}


//My output
console.log("Good Morning " + companyName + ".");
console.log("Our new 1SG is " + firstSergeantName + ".");
console.log("But you will call him " + firstSergeantFullName + ".");
console.log(firstSergeantFullName +"," + " walked out yelling " + callout + "?");
console.log("The Soldiers replied, " + answer + "?");
console.log(firstSergeantFullName + " yelled again," + callout + "!");
console.log(answer + "!");
console.log(firstSergeantFullName + " asked are you sure you are not a poundpuppy?");


console.log(greeting());

// this will pop up a prompt box and ask the user form input, and then
// save that input into the variable.
var question = window.prompt("Having a Good Day Big Dawgs?", "");

if (question == "yes")
{
    console.log("Great");
}
else
{
    console.log("Boo");
}
console.log("The 1SG started of his reign by giving a speed. ");
console.log("This year we will be going to the field a lot troops. ");
console.log("Now when we are there I need you to be focused and flexible, ");
console.log("When we are up we will be working, but when you bunk down you will be sleeping. ");
function sleep(t)
{
    if (t >= 2200 && t <= 0600)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log("Are we sleeping at 2200?");
if (sleep(2200))
{
    console.log("yes we are sleeping at 2200");
}
else
{
    console.log("no, stay up!");
}



function howManyPushUps()
{   
    return 10;
}

for (var pushup = 0; pushup < howManyPushUps(); pushup++)
{
    console.log("1SG " + pushup.toString());
}


var question1 = window.prompt( "Are you sure you aren't a Pound Puppy?", "");

//My conditionals
if (question1 == "yes") {
    //this is the code for insult for yes answer
    if (question1 == "no") {
        //this code for both yes and no are true
    
        
    } else {
        //this code block runs if yes is true and no is false
        console.log("Yes! Was the reply. " + firstSergeantFullName +" said, " +  wrong +" for " + howManyPushs());
    }
} else {
    //this code block is for when yes is false
    console.log("No! Was the reply. " + firstSergeantFullName + " said, Good Job! Have a good day!");
}
