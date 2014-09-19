alert("JavaScript works!");

//Sygonia Sampler
//SDI 140918
//Section 03
//Assignment 3
//Story in JavaScript

//My Variables
var obj1 ={user:"John", age:22, country: "United States"};
var obj2 ={user:"Will", age:25, country: "Portugual"};
var obj3 ={user:"Vinny", age:23, country: "Africa"};
var obj4 ={u1:obj1, u2:obj2, u3:obj3};

function greeting ()  {
    //this will be the simple greeting
    return "Hello"
}
function sleepy(t)
{
    if (t >=2100 || t <= 0900)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(greeting ());

//this will pop up in prompt box and ask user for input, and save input in variable
var question = window.prompt("Hello, Are you having a good day?", "");

if (question =="yes")
{
    console.log("Great");
}
else{
    console.log("I hope it gets better");
}
console.log("Let me tell you about three young men");
console.log("I hope that hearing about them puts a smile on your face");
console.log(obj3.user+" is "+obj3.age+" and is from "+obj3.country);
console.log(obj2.user+" is "+obj2.age+" and is from "+obj2.country);
console.log(obj1.user+" is "+obj1.age+" and is from "+obj1.country);

console.log(obj1.user + ',' + obj2.user + ', ' +" and " + obj3.user + " studied real hard in JavaScript because of the big tournament");
console.log("When they were awake they studied, but when they slept they slept all night!");

if (sleepy(1500))
{
    console.log("yes we have the big tournament tomorrow.");
}
else
{
    console.log("no not yet.");
}


