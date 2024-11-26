import React from 'react';

import './ProductDate.css';

const ProductDate = (props) => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className='bg-black w-20 text-white rounded-md font-medium text-center p-1 text-xs'>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ProductDate