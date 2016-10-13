function validate(){
  //Grab the user's input sdasdas and store in variables
  var userEntered = document.getElementById("user").value;
  if (userEntered.length<6) {
    document.getElementById("usernameError").innerHTML="usename must have 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

else if(userEntered.indexOf(' '))>0{
  document.getElementById("usernameError").innerHTML=" username must not have spaces.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}

  //Show message that there is an error with the username...


}
  function validate(){//Show message that there is an error with the password...
  var passEntered = document.getElementById("pass").value;
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
