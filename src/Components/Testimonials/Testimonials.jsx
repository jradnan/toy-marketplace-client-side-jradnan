import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';



const Testimonials = () => {
    return (
        <div className='mt-10 mx-16'>
            <h1 className="lg:text-[48px] text-[40px] ml-10  md:text-[68px] text-[black] font-bold ">Testimonials

            </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-10'>
                <div className="testimonials shadow-xl   rounded-2xl lg:flex md:flex items-center">
                    <div className="testimonials-img"><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/files/best4.png?v=1665201313" alt="" /></div>

                    <div className="testimonials-text">
                        <div className="rating "><FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            </div>
                        <h5 className='font-bold'>Fantastic!</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>John Doe, Client</p>
                    </div>
                </div>
                <div className="testimonials shadow-xl  rounded-2xl lg:flex md:flex items-center">
                    <div className="testimonials-img"><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/files/best1.png?v=1665201313" alt="" /></div>

                    <div className="testimonials-text">
                        <div className="rating "><FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            </div>
                        <h5 className='font-bold'>Fantastic!</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>John Doe, Client</p>
                    </div>
                </div>
                <div className="testimonials shadow-xl rounded-2xl lg:flex md:flex items-center">
                    <div className="testimonials-img"><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/files/best2.png?v=1665201313" alt="" /></div>

                    <div className="testimonials-text">
                        <div className="rating "><FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className='text-[orange] text-[10px]' icon={faStar} />
                            <FontAwesomeIcon className=' text-[10px]' icon={faStar} />
                            </div>
                        <h5 className='font-bold'>Fantastic!</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>John Doe, Client</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Testimonials;