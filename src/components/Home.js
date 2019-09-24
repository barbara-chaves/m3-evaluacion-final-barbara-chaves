import React from "react";
import PropTypes from 'prop-types';
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Home = props => {
  return (
    <main>
      <Filters value={props.value} onchange={props.onchange}/>
      <CharacterList characterList={props.characterList}/>
    </main>
  );
};

Home.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  characterList: PropTypes.array
}


export default Home
