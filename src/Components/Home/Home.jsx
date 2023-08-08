import Banner from "../Banner/Banner";
import AboutSection from "../Extra/About us/AboutSection";
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
            <AboutSection></AboutSection>
            <Featured></Featured>          
           
        </div>
    );
};

export default Home;