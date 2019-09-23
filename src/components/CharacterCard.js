import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
  const { image, name, species } = props;
  const names = name.split(' ');
  return (
    <li className="character">
      <Link to={`/details/${names[0]}_${names[1]}`}>
        <div className="character__image">
          <img src={image} alt={name} />
          <h2 className="character__name">{name}</h2>
          <p className="character__species">{species}</p>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
