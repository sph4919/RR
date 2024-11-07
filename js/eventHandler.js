
 var savedMessage = ""

function setMessage(event)
{
   var field = event.currentTarget;
   console.log(field.id);
   var adviceBoxData = document.getElementById("adviceBox");


   savedMessage = adviceBoxData.innerHTML;

   if(field.id == "loginEmail")
   {
    adviceBoxData.innerHTML="Enter the Email";
   }
   if(field.id =="loginPassword")
   {
    adviceBoxData.innerHTML = "Enter the Password";
   }

}

function defaultMessage()
{
    var adviceBoxData = document.getElementById("adviceBox");
    adviceBoxData.innerHTML = savedMessage;
}


function emailChecker(email)
{
let regexEmail = /^\w+\d+[@]\w+[.]\w{2,3}$/ig;
if(regexEmail.test(email.value))
{

return true;
}
else
{
return false;
}

}

function passwordChecker(password)
{

let regexPassword = /\w+[!@#$%^&*]\d+|[!@#$%^&*]\d+\w+|\d+\w+[!@#$%^&*]|\w+\d+[!@#$%^&*]/ig;
if(regexPassword.test(password.value))
{
return true;
}
else
{
return false;
}

}





function loginVerifer(event)
{
let userEmail = document.getElementById("loginEmail");
let userPassword = document.getElementById("loginPassword")
let adviceBox = document.getElementById("adviceBox");

var checker = false;
if(emailChecker(userEmail)==true && passwordChecker(userPassword)==true)
{
checker = true;
}

if(checker==false)
{
event.preventDefault();
}

if(checker==true)
{
    console.log("valid Sucessfull");
}


}