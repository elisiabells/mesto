/////          константы       /////

const closePopupButtons = document.querySelectorAll('.popup__button-close');
const popups = document.querySelectorAll('.popup');

// константы popup_edit
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const openPopupButton = document.querySelector('.profile__edit-button');

const popupEdit = document.querySelector('.popup_edit');
const popupFormEditProfile = popupEdit.querySelector('.popup__form');
const popupInputTypeName = popupFormEditProfile.querySelector('.popup__input_type_name');
const popupInputTypeInfo = popupFormEditProfile.querySelector('.popup__input_type_about');

// константы popup_add
const addCardButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const addCardForm = popupAdd.querySelector('.popup__form-add');
const nameInput = addCardForm.querySelector('.popup__input_type_card');
const linkInput = addCardForm.querySelector('.popup__input_type_url');

// константы popup_img
const popupImg = document.querySelector('.popup_img');
const fullImg = popupImg.querySelector('.popup__full-img-img');
const fullImgCaption = popupImg.querySelector('.popup__full-img-caption');

// константы template
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;

/////          функции       /////

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
};

// функция закрытия попапа по клику на оверлей
function closePopupOnOverlayClick(event) {
  if (event.target.classList.contains('popup')) {
    closePopup(event.target);
  }
};

// функция закрытия попапа по нажатию на Esc
function closePopupOnEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// функции закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

// функция, добавляющая обработчики на все кнопки закрытия
closePopupButtons.forEach(btn => {
    const popup = btn.closest('.popup');
    popup.addEventListener('mousedown', closePopupOnOverlayClick);
    btn.addEventListener('click', () => closePopup(popup)); 
  });

// функция сохранения формы профиля
function saveFormProfileInfo(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileSubtitle.textContent = popupInputTypeInfo.value;
  closePopup(popupEdit);
}

// функция создания новой карточки
function createCard(name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImg = element.querySelector('.element__img');
  element.querySelector('.element__title').textContent = name;
  elementImg.src = link;
  elementImg.alt = name;                                                                                                                                                             

  element.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  element.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  elementImg.addEventListener('click', function (evt) {
    openFullImgPopup(name, link);
  });

  return element;
}

// функция добавления новой карточки
function addCard(name, link) {
  const newCard = createCard(name, link);
  elements.prepend(newCard);
}

// функция открытия картинки на весь экран
function openFullImgPopup(name, link) {
  fullImg.src = link;
  fullImg.alt = name;
  fullImgCaption.textContent = name;

  openPopup(popupImg);
}

// функция, добавляющая карточки из массива
initialCards.forEach(({ name, link }) => {
  addCard(name, link);
});

/////          обработчики событий       /////

openPopupButton.addEventListener('click', () => {
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeInfo.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});

addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = nameInput.value;
  const link = linkInput.value;
  addCard(name, link);
  closePopup(popupAdd);
  addCardForm.reset();
  const saveButton = event.submitter;
  saveButton.classList.add('popup__button-save_inactive');
  saveButton.disabled = true;
});

addCardButton.addEventListener('click', () => openPopup(popupAdd));
popupFormEditProfile.addEventListener('submit', saveFormProfileInfo);