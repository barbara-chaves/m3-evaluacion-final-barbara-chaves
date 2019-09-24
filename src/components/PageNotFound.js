import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/page-not-found.scss';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <button className="page-not-found__button">
        <Link to='/'>Volver a la página principal</Link>
      </button>
      <h2 className="page-not-found__title">No encontramos lo que buscas</h2>
    </div>
  );
};

export default PageNotFound
