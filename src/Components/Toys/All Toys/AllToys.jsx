import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";
import Loader from "../../Loader/Loader";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://y-xi-indol.vercel.app/allToy')
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setIsLoading(false);
            })
    }, [])

    const groupedToys = [];

    for (let i = 0; i < toys.length; i += 4) {
        groupedToys.push(toys.slice(i, i + 4));
    }

    return (
        <div className="container mx-auto p-4">
            {isLoading ? (
                <Loader></Loader>
            ): (
                    <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {groupedToys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col space-y-4">
                {row.map(toy => (
                    <ToysCard key={toy._id} toy={toy} />
                ))}
            </div>
                    ))}
        </div>
    )
}
        </div >
    );
};

export default AllToys;
