
const ImagePopup = ({card, onClose}) => {
  return (
    <div className={`popup popup_type_show-image ${card.isOpened ? 'popup_open' : ''}`}>
      <div className="popup__show-image">
        <button
          type="button"
          className="popup__button popup__button_type_close-image"
          aria-label="кнопка закрытия формы"
          onClick={onClose}
        />
        <img
          className="popup__image"
          src={card.link}
          alt={card.name}
        />
          <p className="popup__subtitle-image">{card.name}</p>
      </div>
    </div>
  );
};

export default ImagePopup;
