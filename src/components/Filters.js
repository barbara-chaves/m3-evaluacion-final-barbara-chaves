import React from "react";

const Filters = props => {
  return (
    <div className="filter">
      <label htmlFor="filter__name">Filtre por nombre</label>
      <input type="text" id="filter__name" value={props.value} onChange={props.onchange}/>
    </div>
  );
};

export default Filters;
