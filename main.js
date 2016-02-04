// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
var divideByTwo = function (number) {
	console.log(number / 2);
};

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

var greeting = function (name1, name2) {
	console.log("Hello, " + name1 + " and " + name2 + "!");
};

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
var cashewCost = function (price) {
	console.log(price * 6);
};

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
var teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var team1 = [];
var team2 = [];
var teamsPicker = function (players) {
	for (var = i; i < players.length; i++) {
		if (i % 2 === 0) {
			team1.push(players[i]);
		} else {
			team2.push(players[i]);
		}
	}
};
console.log(team1);
console.log(team2);

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
//    Call the function inside of a conditional statement that prints one statement if the value is even or another statement if the value is odd.
//    In pseudocode:
//                  defining my function here(parameter)
//                      returns a value that divides that parameter by 4
//
//                  if (calling the function with parameter divided by 2 is even)
//                      print out a statement saying the number is even
//                  else
//                      print out a statement saying the number is odd

var quarter = function (number) {
	return number / 4;
};

if (quarter(8) % 2 === 0) {
	console.log("The number is even.");
} else {
	console.log("The number is odd.");
}

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

var area = function (base, height) {
	return base * height / 2;
};
var perimeter = function (base, height) {
	return base + (Math.sqrt(Math.pow(base / 2, 2) + Math.pow(height, 2))) * 2;
};

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
var sleepings = function (hours) {
	if (hours > 8) {
		console.log("Wow. You officially can't blame it on lack of sleep.");
	} else {
		console.log("You can blame it on lack of sleep but it's probably a more stable character flaw that took a long time to build and will take a long time to lose. Better make sure you don't get more shut eye so you'll always have an excuse.");
	}
};


// 8. Prompt a user to enter a six digit number. Write a function that reverses the number.
//    (Hint, you will have to turn the integer into a string before you can reverse it.)
var number = prompt("enter a six digit number");
var backwards = function () {
	//var string = number.toString;
	var output = '';
	for (var i = number.length; i > 0; i--) {
		output += number.substring(i - 1, i);
	}
	return parseInt(output);
};
backwards();

// 9. Within the function you wrote in #8, write a conditional statement that checks to ensure the user entered a six digit integer.
//    If they have not entered a six digit integer, give them a message about being a failure.
var input = prompt("enter a six digit number");
var backwards = function () {
	//var string = input.toString;
	//if (input.length !== 6 || /^\d+$/.test(input)) {
	if (input.length !== 6 || isNaN(input)) {
		alert("You, your answer, and your ancestors are a failure.");
	} else {
		var output = '';
		for (var i = input.length; i > 0; i--) {
			output += input.substring(i - 1, i);
		}
	return parseInt(output);
	}
	
};
backwards();


// 10. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
 var moneyInTheBank = function (quarters, dimes, nickels, pennies) {
 	var value = quarters * 0.25 + dimes * 0.10 + nickels * 0.05 + pennies * 0.01;
 	value.toFixed(2);
 	//console.log("$" + value);
 };
 moneyInTheBank(3, 1, 2, 5);
// 11. Develop a function that determines a person's age by prompting them for their birth year.
var ager = function (birthYear) {
	//var time = new Date();
	//var currentYear = time.getFullYear;
	var currentYear = 2016;
	age = currentYear - birthYear;
	console.log(age);

};
ager(1991);

// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is

var leapYear = function (year) {
	if ( year % 4 === 0 && year % 400 !== 0 && year % 100 !== 0) {
		console.log(year + " is a leap year");
	} else {
		console.log(year + " is not a leap year");
	}
};
leapYear(1997);
leapYear(1996);

// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number
//        If the phone number is more than 11 digits assume that it is a bad number
var phoneFresh = function (number) {
	var number = number.toString();
	if (number.length < 10) {
		console.log("Hm, you're number has fewer than 10 digits. Please enter a number with at least 10 digits.");
	} else if (number.length == 10) {
		console.log("I'm assuming this is a good number.");
	} else if (number.length == 11 && number.charAt(0) !== 1) {
		console.log("I'm assuming this is a bad number.");
	} else if (number.length > 11) {
		console.log("I'm assuming this is a bad number.");
	} else {
		console.log("Hm, I'm not sure what to make of this number. Can you confirm it's the right number?");
	}
};
phoneFresh(3032938544);

// 14. Create a function that determines whether a parameter is a number or not (Hint: google "isNan")
//     Iterate over the elements in the following array to determine if each is a number.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

var numberCheck = arrayOfAllTheThings.map(function (toCheck) {
	if (isNaN(toCheck) === true) {
		console.log(toCheck + " is not a number");
	} else {
		console.log(toCheck + " is a number");
	}
});


//15. Create a die rolling function that accepts two parameters (the two six-sided dice) and outputs an array of the two values rolled.
var dieRoll1 = function (roll1, roll2) {
	if (roll1 !== 6) { 
		roll1 = 6;
	}
	if (roll2 !== 6) { 
		roll2 = 6;
	} 
	var break1 = Math.floor(Math.random() * roll1) + 1;
	var break2 = Math.floor(Math.random() * roll2) + 1;
	var theBreaks = [break1, break2];
	
	console.log(theBreaks);
	return theBreaks;
}
dieRoll1(1, 1);

var dieRoll2 = function () {
	var theBreaks = [];
	theBreaks.push(Math.floor(Math.random() * 6) + 1);
	theBreaks.push(Math.floor(Math.random() * 6) + 1);  
	return theBreaks;

}
dieRoll2();

var dieRoll3 = function (numberOfDice) {
	var theBreaks = [];
	for (var i = 0; i < numberOfDice; i++)
	theBreaks.push(Math.floor(Math.random() * 6) + 1);
	return theBreaks;

}
dieRoll3(2);

// 16. Create another fuction called "whichSide". It will accept the array from above as it's only parameter.
//     This function will mimic a Monopoly board. Start playerOne at the Go space (0) and add the two values from your die array to determine
//     how many square the player will move. Log to the console which side of the board the player is on.
//     Hint: each side has 11 square. You can call the sides of the board: north, east, south, west or top, right, bottom, left.
var square = 0;
var whichSide = function (param) {
	var roll = param;
	for (var i = 0; i < roll.length; i++) {
		square += roll[i];
	}
	if (square <= 10) {
		console.log("Player moves to " + square + " and is on the south side of the neighboard.");
	}
	if (square <= 20 && square >= 10) {
		console.log("Player moves to " + square + " and is on the west side of the neighboard.");
	}
	if (square <= 30 && square >= 20) {
		console.log("Player moves to " + square + " and is on the north side of the neighboard.");
	}
	if (square <= 40 && square >= 30) {
		console.log("Player moves to " + square + " and is on the east side of the neighboard.");
	}
}

whichSide(dieRoll2());


// 17. Using the game above, use the same function(s) and add additional code to determine if the player is on a corner spot.
//     Log to the console which corner the player is located.
var dieRoll2 = function () {
	var theBreaks = [];
	theBreaks.push(Math.floor(Math.random() * 6) + 1);
	theBreaks.push(Math.floor(Math.random() * 6) + 1);  
	return theBreaks;
};
//dieRoll2();

var square = 0;
var whichSide = function (param) {
	var roll = param;
	var rollValue = 0;
	for (var i = 0; i < roll.length; i++) {
		rollValue += roll[i];
		square += roll[i];
	}
	console.log("Player rolls a " + rollValue);
	if (square > 40) {
		square = square % 40;
	}
	if (square < 10) {
		console.log("Player moves to square " + square + " and is on the south side of the neighboard.");
	}
	if (square == 10) {
		console.log("Player moves to square " + square + " and is on the jail corner");
	} 
	if (square < 20 && square > 10) {
		console.log("Player moves to square " + square + " and is on the west side of the neighboard.");
	}
	if (square == 20) {
		console.log("Player moves to square " + square + " and is on the free parking corner");
	} 
	if (square < 30 && square > 20) {
		console.log("Player moves to square " + square + " and is on the north side of the neighboard.");
	}
	if (square == 30) {
		console.log("Player moves to square " + square + " and is on the go to jail corner");
	} 
	if (square < 40 && square > 30) {
		console.log("Player moves to square " + square + " and is on the east side of the neighboard.");
	}
	if (square == 40) {
		console.log("Player moves to square " + square + " and is on the go corner");
	} 
};
whichSide(dieRoll2());

