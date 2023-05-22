import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToy from './MyToy';

const MyToys = () => {

    const {user } = useContext(AuthContext);
    const [toyData, setToyData] = useState([])
    const url = `http://localhost:5000/allToy?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToyData(data))
    },[])
    return (
        <div>
           {
                toyData.map(toy => <MyToy key={toy._id} toy={toy}></MyToy>)
           }
        </div>
    );
};

export default MyToys;