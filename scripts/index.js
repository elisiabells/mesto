//      Данные из профиля
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//      Контейнер popup
const popupContainerEditProfile = document.querySelector('.popup');
const popupFormEditProfile = document.querySelector('.popup__form');

//      кнопки 
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');

//      данные из popup
const popupInputTypeName = popupFormEditProfile.querySelector('.popup__input_type_name');
const popupInputTypeInfo = popupFormEditProfile.querySelector('.popup__input_type_about');



//      функция открытие
function openPopup() {
  popupContainerEditProfile.classList.add('popup_opened');
  
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeInfo.value = profileSubtitle.textContent;
}

//      функция закрытие
function closePopup() {
  popupContainerEditProfile.classList.remove('popup_opened');
}

//      функция сохранение
function saveFormProfileInfo (evt) {
  evt.preventDefault ();
  profileTitle.textContent = popupInputTypeName.value;
  profileSubtitle.textContent = popupInputTypeInfo.value;
  closePopup();
};

//       слушатели popup
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupFormEditProfile.addEventListener ('submit', saveFormProfileInfo);