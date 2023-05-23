import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2';

const MyToys = () => {

    const {user } = useContext(AuthContext);
    const [toyData, setToyData] = useState([])
    const url = `https://y-mbff8sd27-afridimhrj10-gmailcom.vercel.app/allToy?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToyData(data))
    },[])
    
    const handleDelete = id =>{
        const proceed = confirm("are you sure you want to delete?")
        if(proceed){
            fetch(`https://y-mbff8sd27-afridimhrj10-gmailcom.vercel.app/allToy/${id}`, {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data has been deleted',
                        showConfirmButton: false,
                        timer: 1500
                      })

                      const remaining = toyData.filter(toy => toy._id !== id);
                      setToyData(remaining);
                }
            })
        }

    }
    return (
        <div>
           {
                toyData.map(toy => <MyToy key={toy._id} handleDelete={handleDelete} toy={toy}></MyToy>)
           }
        </div>
    );
};

export default MyToys;