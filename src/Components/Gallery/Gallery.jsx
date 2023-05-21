
const Gallery = () => {
    return (
        <div className="mt-10 mx-10">
            <h1 className="lg:text-[68px] text-[40px] text-center  md:text-[68px] text-[black] font-bold ">Gallery
        
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/205323/pexels-photo-205323.png?auto=compress&cs=tinysrgb&w=600" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/8409850/pexels-photo-8409850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/3806754/pexels-photo-3806754.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pizza" />
                </div>
              
            </div>
        </div>
    );
};

export default Gallery;