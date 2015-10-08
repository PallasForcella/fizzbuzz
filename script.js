var begincount;

function EnterNumber(){
	begincount = prompt("Enter a number between 50 and 100");

begincount= parseInt(begincount, 10);
CheckValid();
}

// appends the html to add a li
function PrintNumber(number){
	$("body").append("<li>"+number+"</li>");
}

EnterNumber();

function CheckValid(){
	//checks if it's NaN
	if ( isNaN(begincount)
		)
	{
		alert("Please enter a valid number");
		EnterNumber();
	}
	else if (begincount<=49 || begincount>100)
	{
		alert("Please enter a number between 50 and 100");
		EnterNumber();
	}
}

function count(){
	for (var number = 1; number<=begincount;number++){
		if ((number%3 === 0)&&(number%5 === 0))
		{
			PrintNumber("fizzbuzz");
		}
		else if (number%5 === 0)
		{
			PrintNumber("buzz");
		}
		else if (number%3 === 0)
		{
			PrintNumber("fizz");
		}
		else
		{
			PrintNumber(number);
		}
	}
}

count();



// function PrintNumber(number){
// 	$("body").append("<li>"+number+"</li>");
// }

// for (var number = 1; number<=100;number++){
// 	if ((number%3 === 0)&&(number%5 === 0))
// 	{
// 		PrintNumber("fizzbuzz");
// 	}
// 	else if (number%5 === 0)
// 	{
// 		PrintNumber("buzz");
// 	}
// 	else if (number%3 === 0)
// 	{
// 		PrintNumber("fizz");
// 	}
// 	else
// 	{
// 		PrintNumber(number);
// 	}
// }

//please explain why the variable for number is working/getting called into the function



