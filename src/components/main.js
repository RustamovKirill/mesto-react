import {useEffect, useState} from "react";
import api from '../utils/api'
import Card from "./Card";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {

    Promise.all([api.getUserInfo(),api.getInitialCards()])
      .then(([{avatar, about, name}, cards]) => {
        setUserAvatar(avatar)
        setUserDescription(about)
        setUserName(name)
        setCards(cards)
      })
      .catch(e => console.log(e))
  }, [])
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__user-avatar">
          <button
            type="button"
            className="profile__avatar-button"
          />
          <img
            className="profile__avatar"
            src={userAvatar} alt="Аватар"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button
            type="button"
            id="open-form"
            className="profile__edit-button"
            aria-label="открытие поля для редактирования"
            onClick={onEditProfile}
          />
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        {cards.map(({link, name, likes, _id}) => (
          <Card
            link={link}
            name={name}
            likes={likes}
            onCardClick={onCardClick}
            key={_id}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
