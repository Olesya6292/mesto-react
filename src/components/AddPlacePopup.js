import React from "react";
import PopupWithForm from "./PopupWithForm";


export default function AddPlacePopup({isOpen, onClose, onAddPlace, isLoading}){
    const[name, setName] = React.useState("");
    const[link, setLink] = React.useState("");

    function handleNameChange(e) {
        setName(e.target.value);
      }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }  

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({
          name,
          link
        });
      }
    return(
<PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          loadingButtonText = "Сохранение..."
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        >
          <input
            type="text"
            name="title"
            id="title-input"
            placeholder="Название"
            className="popup__input popup__input_type_title"
            required
            value={name} 
            onChange={handleNameChange}
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
            value={link} 
            onChange={handleLinkChange}
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
    )
}