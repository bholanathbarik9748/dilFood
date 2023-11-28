import React from 'react';

const Rating = ({ value }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span
            key={index}
            className={`text-2xl ${index + 1 <= value ? 'text-yellow-500' : 'text-gray-300'
                }`}>
            ★
        </span>
    ));

    return <div className="flex">{stars}</div>;
};

export default Rating;