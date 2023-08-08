import Banner from "../Banner/Banner";
import CardList from "../Extra/CardList";
import Featured from "../Featured/Featured";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
            <CardList></CardList>
            <Featured></Featured>          
           
        </div>
    );
};

export default Home;