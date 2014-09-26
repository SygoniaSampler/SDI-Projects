// Function: valid email address without regex
function isValidPhoneNumber(phoneNumber) {

     // If no phone number or wrong value gets passed in (or nothing is passed in), immediately return false.
    if(typeof phoneNumber === 'undefined') return null;
    if(typeof phoneNumber !== 'string') return false;

    // Get phone number  parts
    var phoneNumberParts = phoneNumber.split('-');

    // There must be exactly 3 parts
    if(phoneNumberParts.length !== 3) {
        alert("Wrong number of - signs");
        return false;   
    }

    // Name the parts
    var part1 = phoneNumberParts[0];
    var part2 = phoneNumberParts[1];
    var part3 = phoneNumberParts[2];

    // === Validate the parts === \\

    var validChars = '1234567890-';

    // validating lengths of parts as part1, part2, part3 must be 3,3 and 4 in length respectively.
    if(part1.length != 3 || part2.length != 3 || part3.length != 4) {
        alert("Wrong number of characters before or after - sign");
        return false;
    }

    // phone number must only include valid chars
    for(var i = 0; i < phoneNumber.length; i += 1) {
        if(validChars.indexOf(phoneNumber.charAt(i)) < 0 ) {
            alert("Invalid character");
            return false;   
        }
    }
    
    //we can check for all email parts separately for valid chars. that would make the alert more informative.

    alert("Phone number seems valid");
    return true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function: valid email address without regex
function isValidEmail(email) {

    // If no email or wrong value gets passed in (or nothing is passed in), immediately return false.
    if(typeof email === 'undefined') return null;
    if(typeof email !== 'string' || email.indexOf('@') === -1) return false;

    // Get email parts
    var emailParts = email.split('@');
    var emailDomainParts = emailParts[1].split('.');
    alert(emailParts[0]);
    alert(emailParts[1]);
    alert(emailDomainParts[0]);
    alert(emailDomainParts[1]);
    
    // There must be exactly 2 parts
    if(emailParts.length !== 2) {
        alert("Wrong number of @ signs");
        return false;   
    }
    
    if(emailDomainParts.length !== 2) {
        alert("Wrong number of . signs");
        return false;
    }
    // Name the parts
    var emailFirstName = emailParts[0];
    var emailSecondName = emailDomainParts[0];
    var emailDomain = emailDomainParts[1];

    // === Validate the parts === \\//assuming there is no lower/upper bound on length of each part
    // Define valid chars
    var validChars = 'abcdefghijklmnopqrstuvwxyz1234567890.@';

    // email must only include valid chars
    for(var i = 0; i < email.length; i += 1) {
        if(validChars.indexOf(email.charAt(i)) < 0 ) {
            alert("Invalid character");
            return false;   
        }
    }
    
    //we can check for all email parts separately for valid chars. that would make the alert more informative.
    
    alert("Email address seems valid");
    return true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function: is URL without regex
function isURL(url) {

     // If no phone number or wrong value gets passed in (or nothing is passed in), immediately return false.
    if(typeof url === 'undefined') return null;
    if(typeof url !== 'string') return false;

    // Get phone number  parts
    var urlParts = url.split(':');

    // Name the parts
    var part1 = urlParts[0];
    var part2 = urlParts[1];

    // === Validate the parts === \\

    var validCharsSet1 = 'https';
    var validCharsSet2 = '/';

    //validating part1
    var flag = 0; //flag for http/https

    if(part1.length != 4 && part1.length != 5) {
    alert("Invalid string length before : sign");
    return false;
    }

    for(var i = 0; i < part1.length; i += 1) {
        if(url.charAt(i) === validCharsSet1.charAt(i)) {
                flag = 1;
        }
        else {
            alert("Its netiher HTTP nor HTTPS");
            return false;
        }
    }

    for(var i = 0; i < 2; i += 1) {
        if(validCharsSet2.indexOf(url.charAt(i+part1.length+1)) < 0) {
            console.log(url.charAt(i+part1.length));
                alert("Invalid character after : sign");
                return false;
        }
    }

    //validating part 2
    for(var i = 0; i < 2; i += 1) {
    if(validCharsSet2.indexOf(url.charAt(i+part1.length+1)) < 0) {
        alert("Invalid character after : sign");
        return false;
    }
    }

    if(flag === 1) {
        alert("This string looks like a URL");
        return true;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function: to convert a string to title case without regex
function toTileCase(str) {
  var words = str.split(' ');
  var resultArray = [];
  for (var i=0; i < words.length; i++) {
      var letter = words[i].charAt(0).toUpperCase();
      resultArray.push(letter + words[i].slice(1));
  }
  return resultArray.join(' ');
};
//used as 'john smith'.toTitleCase();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//change separator
function changeSeparator(string, separator1, separator2) {
  var words = string.split(separator1);
  return words.join(separator2);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//format a number based on given number of decimal places

function roundUp(number, decimalPlaces) {
    var num = number.toFixed(decimalPlaces);
    return num;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fuzzy-match a number
function isFuzzy(num1, num2, percent){
	var smaller = num1;
	var greater = num2;
	if(num1 > num2) {
		smaller = num2;
		greater = num1;
	}
	var calculatedPercentage = (smaller/greater)*100;
	if(calculatedPercentage >= (100-percent)) {
		alert("Fuzzy number match successfull");
		return true;
	}
	else {
		alert("Number doesn't lie within given percentage range!");
		return false;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//number of days or hours between two dates
function countBetweenDates(date1, date2, output) {
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    var diffHours = Math.ceil(timeDiff / (1000 * 3600));
    if (output === 'days'){
        alert(diffDays + " is the day count between the two dates");
        return diffDays;
    }
    if (output === 'hours'){
                alert(diffHours + " is the hour count between the two dates");
        return diffHours;
    }
}


//converting a string to a number
function stringToNumber(str){
    var a= typeof str;
    if(typeof str == 'string'){
        
        var temp = parseInt(str);
        if (!isNaN(str))
        {
        alert("The numeric for string is" + temp);
        return temp;
        }
        else{
            alert("The string is not a number");
        }
    }
    else
    {
        alert("The argument is not a string")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//smallest element in the array greater than or equal to given element
//Missed Credit from Week 3
function findInArray(array1, number) {
    var index = 0;
    

    var max = array1[0], i = 0;

    for (i = 0; i < array1.length; ++i) {
          if (array1[i] > max) {
            max = array1[i];
          }
    }
    
    var min=max;

    for(index = 1; index < array1.length; index++) {
        if(array1[index] > number && array1[index] < min)
            min = array1[index];
        }
    
    if( min > number){
        alert("The smallest number in the array greater than " + number +" is " + min);
        return min;
    }
    else {
        alert("All elemennts in the array are smaller than the given element");
        return false;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//add the numbers in an array ignoring the strings
//Missed Credit From Week 3
function addNumbersInArray(array){
    var number = 0;
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] == "string") {}
        else
            number += array[i];
    }
    return number;
}

//////////////////////////////////////////////////////////////////////////////


//this is the call to get element from document and validate it
/*
document.getElementById('submit').onclick = function() {
    var email = document.getElementById('email').value;
    isValidEmail(email);

    //other validations can be called similarly once included in HTML.
};*/
