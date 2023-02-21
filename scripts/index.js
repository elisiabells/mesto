//                                       4 спринт
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
function saveFormProfileInfo(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileSubtitle.textContent = popupInputTypeInfo.value;
  closePopup();
};

//       слушатели popup
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupFormEditProfile.addEventListener('submit', saveFormProfileInfo);


//                                       5 спринт
const addCardButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__add-close');
const popupContainerAddProfile = document.querySelector('.popup_add');

const openAddCard = () => {
  popupContainerAddProfile.classList.add('popup_opened');
};

const closeAddCard = () => {
  popupContainerAddProfile.classList.remove('popup_opened');
};

closeAddButton.addEventListener('click', closeAddCard);
addCardButton.addEventListener('click', openAddCard);

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

const elementTemplate = document.querySelector('.element-template');
const elements = document.querySelector('.elements');
const addCardForm = document.querySelector('.popup__form-add');
const nameInput = addCardForm.querySelector('.popup__input_type_card');
const linkInput = addCardForm.querySelector('.popup__input_type_url');

// Функция добавления карточки
function addCard(name, link) {
  const placeElement = elementTemplate.content.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__title').textContent = name;
  placeElement.querySelector('.element__img').src = link;

  const likeButton = placeElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  const deleteButton = placeElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  elements.prepend(placeElement);
}

// Добавление дефолтных карточек
initialCards.forEach(({ name, link }) => {
  addCard(name, link);
});

// Добавление новых карточек
addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = nameInput.value;
  const link = linkInput.value;
  addCard(name, link);
  closeAddCard();
});
