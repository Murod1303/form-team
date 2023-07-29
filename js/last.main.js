
var elForm = document.querySelector(".last__form");
var elInput = document.querySelector(".last__input");
var elInputValue = elInput.value.trim();
elForm.addEventListener("submit", (evt) => {
    // evt.preventDefault(false);
    if (!   elInputValue.endsWith("@gmail.com")) {
        alert("s");
        return;
    }
}) 