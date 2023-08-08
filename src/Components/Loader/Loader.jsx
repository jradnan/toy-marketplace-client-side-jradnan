import './Loader.css'

const Loader = () => {
    return (
        <div className='flex justify-center items-center py-40'>
            <div className="lds-roller "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;