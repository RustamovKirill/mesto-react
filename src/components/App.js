import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from 'react'
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
console.log(isEditAvatarPopupOpen)
  const [selectedCard, setSelectedCard] = useState({
    isOpened: false,
  })

  const handleCardClick = ({link, name, isOpened}) => {
    setSelectedCard({
      link,
      name,
      isOpened: !isOpened,
    })
  }
console.log(selectedCard)
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ isOpened: false })
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name='add-element'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          container='input_add-card'
          onClose={closeAllPopups}
        >
          <input
            type="text"
            id="name"
            name="name"
            className="input__text input__text_type_title"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="name-error" className="error" />
          <input
            type="url"
            id="link"
            name="link"
            className="input__text input__text_type_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error" className="error" />
        </PopupWithForm>

        <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          container='input_edit-profile'
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            id="title"
            className="input__text input__text_type_name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="title-error" className="error" />
          <input
            type="text"
            name="about"
            id="content"
            className="input__text input__text_type_content"
            placeholder="О Себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="content-error" className="error" />
        </PopupWithForm>

        <PopupWithForm
          name='add-avatar'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          container='input_add-avatar'
          onClose={closeAllPopups}
        >
          <input
            type="url"
            id="avatar"
            name="avatar"
            className="input__text input__text_type_avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="avatar-error" className="error" />
        </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
