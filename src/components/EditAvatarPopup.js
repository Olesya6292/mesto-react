import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
}) {
  const avatar = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      loadingButtonText="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        type="url"
        name="link-avatar"
        id="link-input-avatar"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_link-avatar"
        ref={avatar}
        required
      />
      <span className="popup__input-error link-input-avatar-error"></span>
    </PopupWithForm>
  );
}
