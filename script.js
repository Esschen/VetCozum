// source https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_weekday

function currentday() {
	var a = new Date();
	var days = new Array(7);
	days[0] = "Sunday";
	days[1] = "Monday";
	days[2] = "Tuesday";
	days[3] = "Wednesday";
	days[4] = "Thursday";
	days[5] = "Friday";
	days[6] = "Saturday";
	var r = days[a.getDay()];
	return r; // added by myself to use for sidebar
}

function checkmymailform() {
if(document.mailform.email.value == "") //check if e-mail is filled out
{
alert("Please make sure all the fields are filled out");
document.mailform.email.style.background = "red";
document.mailform.email.focus();
return false;
}
if(document.mailform.email.value.indexOf('@') == -1) //check if e-mail has a @
{
alert("Please type a valid e-mail adress");
document.mailform.email.style.background = "red";
document.mailform.email.focus();
return false;
}
if(document.mailform.fullname.value == "") //check if full name is filled out
{
alert("Please make sure all the fields are filled out");
document.mailform.fullname.style.background = "red";
document.mailform.fullname.focus();
return false;
}
}

/* 20181207 */