import React from "react";
import PropTypes from 'prop-types'

const Filters = props => {
  return (
    <div className="filter">
      <label htmlFor="filter__name">Filtre por nombre</label>
      <input type="text" id="filter__name" value={props.value} onChange={props.onchange}/>
    </div>
  );
};

Filters.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Filters;
