import { Link } from 'react-router-dom';
import './Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [messageError, setMessageError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      
        console.log(email, password);
        setMessageError("");
        setSuccess("");
        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setSuccess("Successfully logged in")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessageError(errorMessage);
            console.log(errorCode, errorMessage);
          });
    }
    return (
        <div className="hero min-h-screen ">

            <div className=" flex-shrink-0 w-full max-w-sm  border-black">
                <form onSubmit={handleLogin} className='custom-form rounded-3xl'>
                    
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                            <label className="label">
                                <h6>New Here? Please <Link to={'/signUp'}><span className='font-[600] text-[#B8D4C6]'>Register</span></Link></h6>
                            </label>
                            <p className='text-[red] mt-6 text-center'>{messageError}</p>
                            <p className='text-[green] text-center'>{success}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-3 rounded-lg font-medium bg-[#B8D4C6] ">Login</button>
                            <h1 className='text-center mt-8'>..................................OR...............................</h1>
                        </div>
                        <div className='text-center p-3 bg-gradient-to-r from-red-600 via-amber-400
                        to-blue-700  my-6 rounded-xl w-full'><h1 className='text-[white] font-bold cursor-pointer'>GOOGLE</h1></div>
                   
                </form>
            </div>
        </div>

    );
};

export default Login;