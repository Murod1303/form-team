var elForm = document.querySelector(".register__form");
var elInputEmail = elForm.querySelector(".js-register__input-email");
var elInputPassword = elForm.querySelector(".js-register__input-password");
var elInputCheckbox = elForm.querySelector(".js-register__input-checkbox");
/* veriables */


elForm.addEventListener("submit", (evt) => {
  // evt.preventDefault();
  var elInputEmailValue = elInputEmail.value.trim();

  var elInputPasswordValue = elInputPassword.value.trim();
  var elInputPasswordValueLower = elInputPasswordValue.toLowerCase();

  
  if (!elInputEmailValue.endsWith("@gmail.com")) {
    alert("emailingizni to'g'ri kiriting")
    return;
  }
  if (elInputPasswordValue == elInputPasswordValueLower) {
    return;
  } else {
  }
})





