// 4 спринт
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupContainerEditProfile = document.querySelector('.popup');
const popupFormEditProfile = document.querySelector('.popup__form');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = popupContainerEditProfile.querySelector('.popup__button-close');
const popupInputTypeName = popupFormEditProfile.querySelector('.popup__input_type_name');
const popupInputTypeInfo = popupFormEditProfile.querySelector('.popup__input_type_about');

function openPopup() {
  popupContainerEditProfile.classList.add('popup_opened');
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeInfo.value = profileSubtitle.textContent;
}

function closePopup() {
  popupContainerEditProfile.classList.remove('popup_opened');
}

function saveFormProfileInfo(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileSubtitle.textContent = popupInputTypeInfo.value;
  closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupFormEditProfile.addEventListener('submit', saveFormProfileInfo);

// 5 спринт
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const addCardButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__add-close');
const popupContainerAddProfile = document.querySelector('.popup_add');
const elementTemplate = document.querySelector('.element-template');
const elements = document.querySelector('.elements');
const addCardForm = document.querySelector('.popup__form-add');
const nameInput = addCardForm.querySelector('.popup__input_type_card');
const linkInput = addCardForm.querySelector('.popup__input_type_url');

function addCard(name, link) {
  const placeElement = elementTemplate.content.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__title').textContent = name;
  placeElement.querySelector('.element__img').src = link;

  placeElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  placeElement.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  placeElement.querySelector('.element__img').addEventListener('click', function (evt) {
    openFullImgPopup(name, link);
  });

  elements.prepend(placeElement);
}

function closeAddCard() {
  popupContainerAddProfile.classList.remove('popup_opened');
}

function openAddCard() {
  popupContainerAddProfile.classList.add('popup_opened');
}

function openFullImgPopup(name, link) {
  const fullImg = document.querySelector('.full-img__img');
  const fullImgCaption = document.querySelector('.full-img__caption');
  const popup = document.querySelector('.popup_img');
  const close = document.querySelector('.popup__img-close');

  fullImg.src = link;
  fullImg.alt = name;
  fullImgCaption.textContent = name;

  popup.classList.add('popup_opened');

  close.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
  });
}

initialCards.forEach(({ name, link }) => {
  addCard(name, link);
});

addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = nameInput.value;
  const link = linkInput.value;
  addCard(name, link);
  closeAddCard();
});

closeAddButton.addEventListener('click', closeAddCard);
addCardButton.addEventListener('click', openAddCard);
