import React from 'react';
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

export default CharacterList