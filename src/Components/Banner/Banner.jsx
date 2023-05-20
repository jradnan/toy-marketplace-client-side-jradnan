import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="bg-[url('https://cdn.shopify.com/s/files/1/0584/0958/2731/files/banner-2.jpg?v=1665200525')] lg:p-[350px] md:p-[200px] lg:h-96">
            <h1 className="lg:text-[68px] text-[40px] text-center lg:text-left md:text-left md:text-[68px] text-[black] font-bold  lg:ml-[-200px] md:ml-[-200px]">Best baby Toys
            <br /> 
                <span className="text-[white]"> for all kids </span>
            </h1>
            <p className="lg:ml-[-200px] md:ml-[-200px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy.</p>
            <div className="py-[30px] md:ml-[-200px] lg:ml-[-200px]">
            <a className="py-4 px-7 text-[14px] font-[700] cursor-pointer rounded-full bg-[#B8D4C6] border-none">Go to categories <FontAwesomeIcon className='ml-[10px]' icon={faGlobe} /></a>
            <a className="py-4 px-7 ml-[20px] text-[14px] font-[700] cursor-pointer rounded-full bg-[white] border-none ">Get Bestsellers now <FontAwesomeIcon  className='ml-[10px]' icon={faRightFromBracket} /></a>
            </div>
        </div>
    );
};

export default Banner;