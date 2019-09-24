import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/characters-list.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const createCharacterCardList = list => {
    return list.map(char => {
      return (
        <CharacterCard
          key={char.id}
          name={char.name}
          image={char.image}
          species={char.species}
        />
      );
    });
  };
  return (
    <div className="characters">
      <ul className="characters__list">
        {createCharacterCardList(props.characterList)}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  characterList: PropTypes.array,
  filter: PropTypes.string,
  children: PropTypes.object
};

export default CharacterList;
