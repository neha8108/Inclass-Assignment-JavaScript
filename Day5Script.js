function Multiplier(multiply,getCurrentValue)
{
	this.multiply = multiply;
	this.getCurrentValue = getCurrentValue;
}

function  multiply(number)
{
	console.log("Multiply= number*1");
}

function getCurrentValue(multiply,nsupplied)
{
   console.log(multiply*nsupplied);	
}

