import React from 'react';
import PropTypes from 'prop-types'
import CharacterCard from './CharacterCard'
 
const CharacterList = props => {
  const createCharacterCardList = list => {
    return list
    .filter(char => char.name.toLowerCase().includes(props.filter.toLowerCase()))
    .map(char => {
      return (
        <CharacterCard key={char.id} name={char.name} image={char.image} species={char.species}/>
      )
    })
  }
  return (
    <section className='characters'>
      {props.children}
      <ul className='characters__list'>
        {createCharacterCardList(props.characterList)}
      </ul>
    </section>
  )
}

CharacterList.propTypes = {
  characterList: PropTypes.array,
  filter: PropTypes.string,
  children: PropTypes.object
}

export default CharacterList