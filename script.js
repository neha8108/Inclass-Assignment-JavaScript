function Validate()
{
	var password = document.getElementById("password").value;
	var password = document.getElementById("username").value;
	if((/\d/.test(username)))
	{
		alert("Good Job!!")
	}
	if(password != 123456){
	   alert("Incorrect Password");
    }
   else
   {
     alert("Passwords Match!!");
   }
}