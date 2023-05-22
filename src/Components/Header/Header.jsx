import { Link } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
            // An error happened.
          });

    }
    return (
        <div className="nav-custom-color ">
            <div className="navbar nav-width">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li tabIndex={0}>
                            <Link to={'/allToys'}>All Toys</Link>
                            </li>
                            <li>
                            <Link to={'/myToys'}>My Toys</Link>
                        </li>
                        <li>
                            <Link to={'/addToy'}>Add A Toy</Link>
                        </li>
                        <li>
                            <Link to={'/blogs'}>Blogs</Link>
                        </li>
                        </ul>
                    </div>
                  <div className="w-44"> <img src="https://i.ibb.co/7RBjwrD/Capture-removebg-preview.png" alt="" /></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-[400] text-[white]">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/allToys'}>All Toys</Link></li>
                        <li>
                            <Link to={'/myToys'}>My Toys</Link>
                        </li>
                        <li>
                            <Link to={'/addToy'}>Add A Toy</Link>
                        </li>
                        
                        <li>
                            <Link to={'/blogs'}>Blogs</Link>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {user?<a onClick={handleLogout} className="px-4 py-2 text-[14px] font-[700] cursor-pointer rounded-3xl bg-[#B8D4C6] border-none">Log Out</a>:<Link to={'/login'} className="px-4 py-2 text-[14px] font-[700] cursor-pointer rounded-3xl bg-[#B8D4C6] border-none">Log In</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;