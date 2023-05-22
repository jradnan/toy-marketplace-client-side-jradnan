import { Link } from "react-router-dom";

const MyToy = ({ toy, handleDelete }) => {
    const { photo, name, seller, email, subCategory, price, rating, details, quantity , _id} = toy;

    return (
        <div>
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
                            <th>Edit</th>
                            <th>Delete</th>
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
                                <Link to={`/updateToy/${_id}`}><button className="btn btn-outline btn-xs">Edit</button></Link>
                            </th>
                          
                            <th>
                                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;