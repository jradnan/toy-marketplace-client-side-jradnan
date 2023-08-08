import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ toy }) => {
    const { photo, name, seller, subCategory, price, quantity, _id } = toy;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{seller}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/toyDetails/${_id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default ToysCard;
