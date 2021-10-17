import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, description, price, img } = service;
    return (
        <div className="service pb-4">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>{description}</p>
            <Link to={`/booking/:${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;