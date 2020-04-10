import React from "react";
import {Link} from "react-router-dom";

const Card = props => {
  return (
    <div className='card mb-4'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'
        className="card-img-top" alt="image"/>
      <div className="card-body">
        <h5 className="card-title">
          React
        </h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <Link className='btn btn-primary' to={'/profile/111'}>Открыть</Link>
      </div>
    </div>
  )
}
export default Card
