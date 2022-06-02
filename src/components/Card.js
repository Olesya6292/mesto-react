import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <button className="card__delete"></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-section">
          <button className="card__like-button"></button>
          <span className="card__like-button-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
