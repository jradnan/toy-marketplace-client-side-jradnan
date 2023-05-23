import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch('https://y-mbff8sd27-afridimhrj10-gmailcom.vercel.app/allToy')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    return (
        <div>
            {
                toys.map(toy=> <ToysCard key={toy._id} toy={toy}></ToysCard>)
            }
        </div>
    );
};

export default AllToys;