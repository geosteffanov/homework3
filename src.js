function validateUsername(username) {
  regex = RegExp("^\\S{3,10}$");
  return regex.test(username);
}

function validateName(name) {
  regex = RegExp("^[A-Za-z]+(\\s[A-Za-z]+)*$");

  return regex.test(name) && name.length < 50;
}

function validateEmail(email) {
 regex = RegExp(("^\\S+@\\S+\\.\\S+$"));

 return regex.test(email);
}

function validatePassword(password) {
  fullMatch = RegExp("^\\S{6,10}$");
  digit = RegExp("\\d")
  lowercase = RegExp("[a-z]")
  uppercase = RegExp("[A-Z]")

  return fullMatch.test(password) && lowercase.test(password) && uppercase.test(password) && digit.test(password);
}


function validateStreet(street) {
  return true;
}

function validateCity(city) {
  regex = RegExp("^[A-Za-z]+(\\s[A-Za-z]+)*$|^\s*$");
  return regex.test(city);
}

function validatePostalCode(postal_code) {
  regex = RegExp("^\\d{5}\\-\\d{4}$|^\\d{4}$|^\s*$");
  return regex.test(postal_code);
}

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

function removeElement(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}