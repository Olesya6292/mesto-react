import React from "react";

function PopupWithForm({ title, name, buttonText, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form form-edit" name={name} noValidate>
          {children}
          <button
            type="submit"
            className="popup__submit popup__submit_type_edit"
          >
            {buttonText}
          </button>
        </form>
        <button
          onClick={onClose}
          type="button"
          className="popup__close popup__close_type_edit"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
}
export default PopupWithForm;
