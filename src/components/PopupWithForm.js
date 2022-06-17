import React from "react";

function PopupWithForm({
  title,
  name,
  buttonText,
  loadingButtonText,
  isLoading,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
      onClick={handleOverlayClose}
    >
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form
          className="popup__form form-edit"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            className="popup__submit popup__submit_type_edit"
          >
            {!isLoading ? buttonText : loadingButtonText}
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
