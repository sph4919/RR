
var adviceEmail = document.getElementById("loginEmail")
adviceEmail.addEventListener("focus",setMessage)


var advicePassword = document.getElementById("loginPassword")
advicePassword.addEventListener("focus",setMessage)

var blurEmail = document.getElementById("loginEmail")
blurEmail.addEventListener("blur",defaultMessage)


var blurPassword = document.getElementById("loginPassword")
blurPassword.addEventListener("blur",defaultMessage)


var emailData = document.getElementById("loginEmail")
emailData.addEventListener("change",loginVerifer)

var passwordData = document.getElementById("loginPassword")
passwordData.addEventListener("change",loginVerifer)