console.log("hellooo");
function validateFormSubmission(e) {
  e.preventDefault();
  cleanErrors();
  users = fetch(' https://jsonplaceholder.typicode.com/users')
  data = getData()
  errors = validateData(data);
  updateForm(data, errors, users);
  return false;
}

function getData() {
  data = {
    "username": document.getElementById('username').value,
    "name": document.getElementById('name').value,
    "family-name": document.getElementById('family-name').value,
    "email": document.getElementById('email').value,
    "password": document.getElementById('password').value,
    "street": document.getElementById("street").value,
    "city": document.getElementById("city").value,
    "postal-code": document.getElementById("postal-code").value
  }
  return data
}

function validateData(data) {
  errors = {};
  if (!validateUsername(data["username"])) {
    errors["username"] = "Невалидно потребителско име. ";
  }

  if (!validateName(data["name"])) {
    errors["name"] = "Невалидно име.";
  }

  if (!validateName(data["family-name"])) {
    errors["family-name"] = "Невалидно фамилно име.";
  }

  if (!validateEmail(data["email"])) {
    errors["email"] = "Невалиден e-mail.";
  }

  if (!validatePassword(data["password"])) {
    errors["password"] = "Невалидна парола.";
  }

  if (!validateCity(data["city"])) {
    errors["city"] = "Невалиден град.";
  }

  if (!validateStreet(data["street"])) {
    errors["street"] = "Невалидна улица.";
  }

  if (!validatePostalCode(data["postal-code"])) {
    errors["postal-code"] = "Невалиден пощенски код.";
  }

  return errors;
}

function updateForm(data, errors, users) {
  if (!isEmpty(errors)) {
    updateFail(errors)
  } else {
    userExists(users, data["username"]).then(
      exists => {
        if (exists) {
          updateUserExists(username)
        } else {
          updateSuccess()
        }
      }
    )
  }
}

async function userExists(users, username) {
  users_data = await users.then(response => { return response.json() })

  for (var idx in users_data) {
    user = users_data[idx]
    if (user["username"] === username) {
      return true;
    }
  }

  return false;
}

function updateSuccess() {
  removeElement("registration-container");
  document.body.innerHTML = '<h1><div id="success">Успешна регистрация!</div></h1>';
}

function updateUserExists(username) {
    err_container_id = "username" + "-error";
    document.getElementById(err_container_id).style.display = "block";
    document.getElementById(err_container_id).innerHTML = "Невалидно потребителско име. Потребителското име вече е заето.";
}

function updateFail(errors) {
  for (var field in errors) {
    error_msg = errors[field]
    err_container_id = field + "-error";
    document.getElementById(err_container_id).style.display = "block";
    document.getElementById(err_container_id).innerHTML = error_msg;
  }
}

function cleanErrors() {
  console.log("Okay")
  error_elements = document.body.getElementsByClassName("error");
  for (idx in error_elements) {
    error_element = error_elements[idx]
    console.log(error_element.innerHTML = "");
  }
}