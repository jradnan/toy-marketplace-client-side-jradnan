import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ toy }) => {
    const { photo, name, seller, price, _id } = toy;

    return (
        <div className="bg-white p-4 rounded-lg border border-[#B8D4C6]">
            <div className="aspect-w-3 aspect-h-4 mb-4">
                <img src={photo} alt={name} className="object-cover rounded-md border-b border-green-300" />
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">Price: ${price}</p>
            <p className="text-gray-600">Seller: {seller}</p>
            <Link to={`/toyDetails/${_id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Details</button>
            </Link>
        </div>
    );
};

export default ToysCard;
