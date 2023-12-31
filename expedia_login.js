let form = document.querySelector("form");

let user_arr = JSON.parse(localStorage.getItem("userData"));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (user_arr == null) {
    alert("Sign up Please!");
    return;
  }

  let userObj = {
    user_email: form.email.value,
    user_password: form.password.value,
  };
  if (check_credential(userObj.user_email, userObj.user_password) == true) {
    localStorage.setItem("login", JSON.stringify(userObj));
    alert("login successful !");
    window.location.href = "../index.html";
  } else {
    alert("invalid email id or password !");
  }
});

function check_credential(user_email, user_password) {
  let filtered = user_arr.filter(function (elem) {
    return elem.email === user_email && elem.password === user_password;
  });

  if (filtered.length > 0) {
    return true;
  } else {
    return false;
  }
}
