function PrintNumber(){
	$("body").append("<li>"+PrintNumber+"</li>");
}

for (var number = 1; number<=100;number++){
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




