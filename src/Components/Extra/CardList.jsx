

const Card = ({ imageSrc, name, price }) => {
    return (
        <div className="border border-solid border-[#B8D4C6] rounded-lg overflow-hidden mx-auto shadow-lg w-72 h-[420px]  my-4">
            <img src={imageSrc} alt={name} className="w-full h-2/3 object-cover" />
            <div className="p-4 flex flex-col justify-between h-[calc(100% - 308px)]">
                <h3 className="text-xl font-semibold">{name}</h3>
                <div className="mt-3  flex items-center justify-between">
                    <p className="text-sm text-gray-600">{price}</p>
                    <button className="px-4 py-2 mt-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

const CardList = () => {
    const cards = [
        { id: 1, name: 'Product 1', price: '$19.99', imageSrc: 'https://www.superherotoystore.com/cdn/shop/files/AAIB915AAAD184-1_400x.webp?v=1691386064' },
        { id: 2, name: 'Product 2', price: '$29.99', imageSrc: 'https://www.superherotoystore.com/cdn/shop/files/AAAI366AAEF441-1_400x.jpg?v=1691402869' },
        { id: 3, name: 'Product 3', price: '$39.99', imageSrc: 'https://www.superherotoystore.com/cdn/shop/files/AAAI367AABU195-1_400x.jpg?v=1687515432' },
        { id: 4, name: 'Product 4', price: '$49.99', imageSrc: 'https://www.superherotoystore.com/cdn/shop/files/AADM365AABI683-1_400x.jpg?v=1684840635' },
        { id: 5, name: 'Product 5', price: '$59.99', imageSrc: 'https://www.superherotoystore.com/cdn/shop/files/AAEI40AABI692-1_400x.jpg?v=1687240931' },
        { id: 6, name: 'Product 6', price: '$69.99', imageSrc: 'https://www.superherotoystore.com/cdn/shop/files/AANJ1352AABU168-1_400x.jpg?v=1684738333' },
    ];

    return (
        <>
            <div className='lg:px-20'>
                <img src="https://cdn.shoplightspeed.com/shops/605879/files/23352495/pendant-flag-announcement-banner.png" alt="" />
            </div>
            <h1 className="lg:text-4xl md:text-5xl text-3xl  lg:ml-28 ml-16 md:ml-20 font-bold text-black ">Store</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {cards.map(card => (
                    <Card key={card.id} name={card.name} price={card.price} imageSrc={card.imageSrc} />
                ))}
            </div>
        </>
    );
};

export default CardList;
