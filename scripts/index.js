//      Контейнер popup
const popupContainerEditProfile = document.querySelector('.popup');
const popupFormEditProfile = document.querySelector('.popup__form');

//      Кнопки 
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');
const savePopupButton = document.querySelector('.popup__button-save');

//      Данные в профиле
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//      Popup профиля
const popupInputTypeName = popupFormEditProfile.querySelector('.popup__input-name');
const popupInputTypeInfo = popupFormEditProfile.querySelector('.popup__input-about');

//    открытие
openPopupButton.addEventListener('click', function() {
  popupContainerEditProfile.classList.add('popup_opened');

  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeInfo.value = profileSubtitle.textContent;
});

//  закрытие
function closePopup() {
  popupContainerEditProfile.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', function() {
  closePopup();
});

function saveFormProfileInfo (evt) {
  evt.preventDefault ();
  profileTitle.textContent = popupInputTypeName.value;
  profileSubtitle.textContent = popupInputTypeInfo.value;
  closePopup();
};

popupFormEditProfile.addEventListener ('submit', saveFormProfileInfo);
