
const ToysCard = ({toy}) => {
    console.log(toy);
    const {photo,name,seller,email,subCategory,price,rating,details,quantity} = toy;
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                           
                        </th>
                        <th>Toy Name</th>
                        <th>Seller</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
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
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {seller}
                        </td>
                        <td>{subCategory}</td>
                        <td>
                            {price}
                        </td>
                        <td>
                            {quantity}
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>


            </table>
        </div>
    );
};

export default ToysCard;