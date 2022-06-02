import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card && "popup_opened"}`}>
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img
            src={card ? card.link : "#"}
            alt={card ? card.name : "#"}
            className="popup__image"
          />
          <figcaption className="popup__caption">
            {card ? card.name : ""}
          </figcaption>
        </figure>
        <button
          onClick={onClose}
          type="button"
          className="popup__close popup__close_type_image"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
