//      Контейнер popup
const popupContainerEditProfile = document.querySelector('.popup_edit-profile');
const popupFormEditProfile = document.querySelector('.popup__form-edit');

//      Кнопки 
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');
const savePopupButton = document.querySelector('.popup__button-save');

//      Данные в профиле
const profileInfo = document.querySelector('.profile__info');
const profileTitle = document.querySelector('.profile__title-text');
const profileSubtitle = document.querySelector('.profile__subtitle');

//      Popup профиля
const profileEdit = document.querySelector('.edit-profile');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeInfo = document.querySelector('.popup__input_type_info');



//      Открытие формы 
openPopupButton.addEventListener('click', function () {
  popupContainerEditProfile.classList.add("popup_opened");
});

//      Закрытие формы на Х
closePopupButton.addEventListener('click', function () {
  popupContainerEditProfile.classList.remove("popup_opened");
});


// Inputы popup профиля

function openProfilePopup() {
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeInfo.value = profileSubtitle.textContent;
  openPopup(popupContainerEditProfile);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileSubtitle.textContent = popupInputTypeInfo.value;
  closePopup(popupContainerEditProfile);
}

openPopupButton.addEventListener("click", openProfilePopup); //  Открытие попапа изменения профиля
profileEdit.addEventListener("submit", handleProfileFormSubmit); //   Сохранение данных в профиль
