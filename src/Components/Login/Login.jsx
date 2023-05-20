import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="hero min-h-screen ">

            <div className=" flex-shrink-0 w-full max-w-sm  border-black">
                <form className='custom-form rounded-3xl'>
                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <h6>New Here? Please <Link to={'/signUp'}><span className='font-[600] text-[#B8D4C6]'>Register</span></Link></h6>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-3 rounded-lg font-medium bg-[#B8D4C6] ">Login</button>
                        </div>
                   
                </form>
            </div>
        </div>

    );
};

export default Login;