import React from "react";
import emptyStar from "./assets/emptyStar.png";
import filledStar from "./assets/filledStar.png";

const Star = (props) => {
  //   console.log(props);
  //   console.log(props.isFilled);

  let starIcon = props.isFilled.isFavorite ? filledStar : emptyStar;
  return (
    <button
      className="favorite-button"
      onClick={props.handleClick}
      aria-pressed={props.isFilled.isFavorite}
      aria-label={
        props.isFilled.isFavorite ? "Remove from Favorites" : "Add to favorite"
      }
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "Filled Star Icon" : "Empty Star Icon"}
        className="star-icon"
      />
    </button>
  );
};

export default Star;
