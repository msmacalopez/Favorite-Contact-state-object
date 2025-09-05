import { useState } from "react";
import avatar from "./assets/avatar.jpg";

import Star from "./Star.jsx";

function App() {
  const [contact, setContact] = useState({
    firstName: "Mr",
    lastName: "Whiskerson",
    phone: "0425 444 444",
    email: "mr.whiskerson@meow.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    // event.preventDefault();
    setContact((prevContObj) => {
      return {
        ...prevContObj,
        isFavorite: !prevContObj.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src={avatar} className="card-avatar" alt="Avatar Icon" />
        <div className="card-info">
          <Star isFilled={contact} handleClick={toggleFavorite} />
          {/* <button
            className="favorite-button"
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from Favorites" : "Add to favorite"
            }
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "Filled Star Icon" : "Empty Star Icon"}
              className="star-icon"
            />
          </button> */}
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="phone">{contact.phone}</p>
          <p className="email">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
