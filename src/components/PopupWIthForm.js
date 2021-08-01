import React from 'react';

const PopupWIthForm = ({children, name, title, isOpen, container, onClose}) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__form">
        <button
          type="button"
          className="popup__button popup__button_type_close-edit"
          aria-label="кнопка закрытия формы"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form name="edit" className={`input ${container}`} noValidate>
          { children }
          <button type="submit" className="input__button-save" aria-label="кнопка сохранить">Сохранить</button>
        </form>
      </div>
    </div>
  )
};

export default PopupWIthForm;
