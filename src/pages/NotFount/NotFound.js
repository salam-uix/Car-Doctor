import React from 'react';
import { Link } from 'react-router-dom';
import notFount from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notFount} alt="" />
            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;