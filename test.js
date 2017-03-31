

function validateQ1(){
  var answer = document.getElementById("q1Answer").value;
  if(isNaN(answer)){
    document.getElementById("q1Error").classList.remove("hidden-message");
    document.getElementById("q1Error").classList.add("shown-message");
    document.getElementById("q1Error").innerHTML = "Please type in a valid number.";
  }
  else if (answer.indexOf(' ') >= 0) {
    document.getElementById("q1Error").classList.remove("hidden-message");
    document.getElementById("q1Error").classList.add("shown-message");
    document.getElementById("q1Error").innerHTML = "Please no spaces.";
  }
  else if(answer == "497714"){
    document.getElementById("q1Error").classList.remove("hidden-message");
    document.getElementById("q1Error").classList.add("shown-message");
    document.getElementById("q1Error").innerHTML = "Correct answer.";
    setCookie("q1Cookie", 1, 1);
    alert("Congratulations it is correct! Continue to another question.");
  }
  else{
    document.getElementById("q1Error").innerHTML ="";
  }

}
function validateQ2(){
  var answer = document.getElementById("q2Answer").value;
  if(isNaN(answer)){
    document.getElementById("q2Error").classList.remove("hidden-message");
    document.getElementById("q2Error").classList.add("shown-message");
    document.getElementById("q2Error").innerHTML = "Please type in a valid number.";
  }
  else if (answer.indexOf(' ') >= 0) {
    document.getElementById("q2Error").classList.remove("hidden-message");
    document.getElementById("q2Error").classList.add("shown-message");
    document.getElementById("q2Error").innerHTML = "Please no spaces.";
  }
  else if(answer == "0749"){
    document.getElementById("q2Error").classList.remove("hidden-message");
    document.getElementById("q2Error").classList.add("shown-message");
    document.getElementById("q2Error").innerHTML = "Correct answer.";
      setCookie("q2Cookie", 1, 1);
      alert("Congratulations it is correct! Continue to another question.");
    }

  else{
    document.getElementById("q2Error").innerHTML ="";
  }
}
function validateQ3(){
  var answer = document.getElementById("q3Answer").value;
  var q3Done = 0;
  if(isNaN(answer)){
    document.getElementById("q3Error").classList.remove("hidden-message");
    document.getElementById("q3Error").classList.add("shown-message");
    document.getElementById("q3Error").innerHTML = "Please type in a valid number.";
  }
  else if (answer.indexOf(' ') >= 0) {
    document.getElementById("q3Error").classList.remove("hidden-message");
    document.getElementById("q3Error").classList.add("shown-message");
    document.getElementById("q3Error").innerHTML = "Please no spaces.";
  }
  else if(answer == "1114"){
    document.getElementById("q3Error").classList.remove("hidden-message");
    document.getElementById("q3Error").classList.add("shown-message");
    document.getElementById("q3Error").innerHTML = "Correct answer.";
      setCookie("q3Cookie", 1, 1);
      alert("Congratulations it is correct! Continue to another question.");
  }
  else{
    document.getElementById("q3Error").innerHTML ="";
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function results(){
  var total = 0;
  total = getCookie("q1Cookie") + getCookie("q2Cookie") + getCookie("q3Cookie");
  if(total == 1){
    alert("You only got one correct, 33% ,back and try 2 more.");
  }
  else if( total == 0){
    alert("You havent gotten one right, 0%,  go try them all.");
  }
  else if(total == 11){
    alert("You got two correct,66%, go look for that last one.");
  }
  else if(total == 111)
  {
    alert("Congratulations 100% ")
  }
  else{
    alert("Error, try another browser!");
  }
}
