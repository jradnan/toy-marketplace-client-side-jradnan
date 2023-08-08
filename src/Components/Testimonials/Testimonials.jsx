import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='mt-6 md:mt-10 lg:mt-20 mx-4 md:mx-8 lg:mx-16'>
            <h1 className="lg:text-4xl md:text-5xl text-3xl ml-4 md:ml-10 font-bold text-black">Testimonials</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-8 mx-4 md:mx-10'>
                <div className="testimonials shadow-xl rounded-2xl lg:flex md:flex items-center">
                    <div className="testimonials-img"><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/files/best4.png?v=1665201313" alt="" className="w-full h-auto" /></div>
                    <div className="testimonials-text p-4">
                        <div className="rating">
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                        </div>
                        <h5 className='font-bold'>Fantastic!</h5>
                        <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>John Doe, Client</p>
                    </div>
                </div>
                <div className="testimonials shadow-xl rounded-2xl lg:flex md:flex items-center">
                    <div className="testimonials-img"><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/files/best1.png?v=1665201313" alt="" className="w-full h-auto" /></div>
                    <div className="testimonials-text p-4">
                        <div className="rating">
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                        </div>
                        <h5 className='font-bold'>Fantastic!</h5>
                        <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>John Doe, Client</p>
                    </div>
                </div>
                <div className="testimonials shadow-xl rounded-2xl lg:flex md:flex items-center">
                    <div className="testimonials-img"><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/files/best2.png?v=1665201313" alt="" className="w-full h-auto" /></div>
                    <div className="testimonials-text p-4">
                        <div className="rating">
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-orange text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[10px]' icon={faStar} />
                        </div>
                        <h5 className='font-bold'>Fantastic!</h5>
                        <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>John Doe, Client</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
