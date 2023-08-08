import './Featured.css';

const Featured = () => {
    return (
        <div className='mx-4 md:mx-8 lg:mx-16 mt-10 md:mt-16'>
            <h1 className="lg:text-4xl md:text-5xl text-3xl ml-4 md:ml-10 font-bold text-black">Our Featured
                <br />
                <span className='text-[#B8D4C6]'>Blog posts</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
                {/* Card 1 */}
                <div className="card bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/4.jpg?v=1651562657" alt="Shoes" className="w-full h-auto" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg font-semibold">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p className="mt-2 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-4">
                            <a className="py-2 px-4 text-sm font-semibold cursor-pointer rounded-full bg-[#B8D4C6]">Read More</a>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/1.jpg?v=1651562604" alt="Shoes" className="w-full h-auto" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg font-semibold">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p className="mt-2 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-4">
                            <a className="py-2 px-4 text-sm font-semibold cursor-pointer rounded-full bg-[#B8D4C6]">Read More</a>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/3.jpg?v=1651562423" alt="Shoes" className="w-full h-auto" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg font-semibold">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p className="mt-2 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-4">
                            <a className="py-2 px-4 text-sm font-semibold cursor-pointer rounded-full bg-[#B8D4C6]">Read More</a>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="card bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/6.jpg?v=1651562693" alt="Shoes" className="w-full h-auto" /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg font-semibold">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p className="mt-2 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-4">
                            <a className="py-2 px-4 text-sm font-semibold cursor-pointer rounded-full bg-[#B8D4C6]">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
