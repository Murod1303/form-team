var elForm = document.querySelector(".js-profile__main-form");
var elName = document.querySelector(".js-profile__main-input-name");
var elLastName = document.querySelector(".js-profile__main-input-surname");
var elEmail = document.querySelector(".js-profile__main-input-email");
var elDate = document.querySelector(".js-profile__main-input-date");
var elNation = document.querySelector(".js-profile__select");
var elTown = document.querySelector(".js-profile__main-input-town");
var elAddress = document.querySelector(".js-profile__main-input-address");
var elCode = document.querySelector(".js-profile__main-input-code");

// chiqivchi idintifikatorlar e'lon qilindi

var elOutName = document.querySelector(".js-information__user-name");
var elOutEmail = document.querySelector(".js-information__item-incoming");
var elOutDate = document.querySelector(".js-information__item-incoming--cake");
var elOutNation = document.querySelector(".js-information__item-incoming--globe");
var elOutTown = document.querySelector(".js-information__item-incoming--houses");
var elOutAddress = document.querySelector(".js-information__item-incoming--pin");
var elOutCode = document.querySelector(".js-information__item-incoming--number");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  // Valuelar olindi
  var elNameValue = elName.value.trim();
  var elLastNameValue = elLastName.value.trim();
  var elEmailValue = elEmail.value.trim();
  var elDateValue = elDate.value.trim();
  var elNationValue = elNation.value.trim();
  var elTownValue = elTown.value.trim();
  var elAddressValue = elAddress.value.trim();
  var elCodeValue = elCode.value.trim();
  
  // Bu yerda elOutName ni o'zini text contenti bo'lgani uchun alohida text contentini oldik
  var elOutNameText = elOutName.textContent.trim();

  // bu yerda esa almashayotgan so'zni alohida bir o'zgaruvchi almashtirib oldim
  var change = `${elNameValue} ${elLastNameValue}`;

  // Bu yerda biz elOutName ni text contentini replace qildik
  elOutName.textContent = elOutNameText.replace(elOutNameText, change);  
  
  changeText(elEmailValue, elOutEmail);
  changeText(elDateValue, elOutDate);
  changeText(elNationValue, elOutNation);
  changeText(elTownValue, elOutTown);
  changeText(elAddressValue, elOutAddress);
  changeText(elCodeValue, elOutCode);
})

function changeText(incomingValue, outgoingText) {
  var change = `${incomingValue}`;

  outgoingText.textContent = change;
}