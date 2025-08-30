import { useState } from "react";
import avatar from "./assets/avatar.jpg";
import emptyStar from "./assets/emptyStar.png";
import filledStar from "./assets/filledStar.png";

function App() {
  const [contact, setContact] = useState({
    firstName: "Mr",
    lastName: "Whiskerson",
    phone: "0425 444 444",
    email: "mr.whiskerson@meow.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? filledStar : emptyStar;

  function toggleFavorite() {
    // event.preventDefault();
    setContact((prevCont) => {
      return {
        ...prevCont,
        isFavorite: !prevCont.isFavorite,
      };
    });
  }

  return (
    <>
      <main>
        <article className="card">
          <img src={avatar} className="card-avatar" alt="Avatar Icon" />
          <div className="card-info">
            <button
              className="favorite-button"
              onClick={toggleFavorite}
              aria-pressed={contact.isFavorite}
              aria-label={
                contact.isFavorite ? "Remove from Favorites" : "Add to favorite"
              }
            >
              <img
                src={starIcon}
                alt={
                  contact.isFavorite ? "Filled Star Icon" : "Empty Star Icon"
                }
                className="star-icon"
              />
            </button>
            <h2 className="name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="phone">{contact.phone}</p>
            <p className="email">{contact.email}</p>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
