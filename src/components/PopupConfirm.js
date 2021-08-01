const PopupConfirm = () => {
  return (
    <div className="popup popup_type_delete-image">
      <div className="popup__form">
        <button
          type="button"
          className="popup__button popup__button_type_close-delete"
          aria-label="кнопка закрытия формы"
        />
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="input input_delete-card">
          <button
            type="submit"
            className="input__button-yes"
            aria-label="кнопка Да"
          >Да
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupConfirm;
