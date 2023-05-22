// import Loading from '../Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <p className='text-[100px] flex justify-center'><span className='animate-spin'>L</span>oading........</p>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;