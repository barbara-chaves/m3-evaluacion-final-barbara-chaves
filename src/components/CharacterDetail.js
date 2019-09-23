import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDizzy, faSmile, faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

const CharacterDetails = props => {
  const {name, species, origin, image, status, episodes} = props.char;
  const changeStatus = () => {
    if (status === 'Alive') {
      return <FontAwesomeIcon icon={faSmile} title='Alive'/>
    } else if (status === 'Dead') {
      return <FontAwesomeIcon icon={faDizzy} title='Dead'/>
    } 
    return <FontAwesomeIcon icon={faQuestionCircle} title='Unknown'/>
  }

  const changeSpecie = () => {
    if (species === 'Alien') {
      return <FontAwesomeIcon icon={faRedditAlien} title='Alien'/>
    } else if (species === 'Human') {
      return <FontAwesomeIcon icon={faUserAlt} title='Human'/>
    } 
    return <FontAwesomeIcon icon={faQuestionCircle} title='Unknown'/>
  }
  
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
        <p className='details__status'><span className='details___names'>Status: </span>{changeStatus()}</p>
        <p className='details__species'><span className='details___names'>Species: </span>{changeSpecie()}</p>
        <p className='details__origin'><span className='details___names'>Origin: </span>{origin}</p>
        <p className='details__episodes'><span className='details___names'>Episodes: </span>{episodes}</p>
      </div>
    </div>
  )
}

CharacterDetails.propTypes = {
  char: PropTypes.object
}

export default CharacterDetails