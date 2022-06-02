import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import "../index.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        ></Main>

        <Footer />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link-avatar"
            id="link-input-avatar"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link-avatar"
            required
          />
          <span className="popup__input-error link-input-avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="Ваше имя"
            className="popup__input popup__input_type_name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            type="text"
            name="profession"
            id="profession-input"
            placeholder="Вид деятельности"
            className="popup__input popup__input_type_profession"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error profession-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="title"
            id="title-input"
            placeholder="Название"
            className="popup__input popup__input_type_title"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error title-input-error"></span>

          <input
            type="url"
            name="link"
            id="link-input"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={false}
          onClose={closeAllPopups}
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
