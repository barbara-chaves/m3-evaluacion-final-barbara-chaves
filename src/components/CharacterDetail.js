import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = props => {
  const {name, species, origin, image, status, episodes} = props.char;
  return (
    <div className='details'>
      <Link to='/'>
        <button className='details__button'>Volver</button>
      </Link>
      <div className='details__image'>
        <img src={image} alt={name} />
      </div>
      <div className='details__description'>
        <h2 className='details__name'>
          {name}
        </h2>
        <p className='details__status'><span className='details___names'>Status: </span>{status}</p>
        <p className='details__species'><span className='details___names'>Species: </span>{species}</p>
        <p className='details__origin'><span className='details___names'>Origin: </span>{origin}</p>
        <p className='details__episodes'><span className='details___names'>Episodes: </span>{episodes}</p>
      </div>
    </div>
  )
}

export default CharacterDetails