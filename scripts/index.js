//      Контейнер popup
const popupContainerEditProfile = document.querySelector('.popup_edit-profile');
const popupFormEditProfile = document.querySelector('.popup__form-edit');

//      Кнопки 
const openPopupButton = document.querySelector('.button-open');
const closePopupButton = document.querySelector('.popup__button-close');
const savePopupButton = document.querySelector('.popup__button-save');

//      Данные в профиле
const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title-text');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');

//      Popup профиля
const profileEdit = document.querySelector('.edit-profile');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeInfo = document.querySelector('.popup__input_type_info');

//      Открытие формы 
openPopupButton.addEventListener('click', function () {
   popupContainerEditProfile.classList.add("popup_opened");
});

//      Закрытие формы
closePopupButton.addEventListener('click', function () {
  popupContainerEditProfile.classList.remove("popup_opened");
});


/*   проверка на валидность
function openProfilePopup() {
   popupInputTypeName.value = profileTitle.textContent;
   popupInputTypeInfo.value = profileSubtitle.textContent;

   toggleButtonState(inputList, savePopupButton);
   inputList.forEach((inputElement) => {
     checkInputValidity(popupContainerEditProfile, inputElement);
   });
   openPopup(popupContainerEditProfile);
 }*/