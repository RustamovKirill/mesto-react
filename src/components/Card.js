
const Card = ({name, likes, link, onCardClick}) => {
  const handleClick = () => {
    onCardClick({name, link})
  }
  return (
    <article className="element">
      <button type="button" className="element__basket-button" />
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="element__block">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-box">
          <button type="button" className="element__heart-button" />
          <span className="element__likes-counter">{likes.length}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
