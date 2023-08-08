const AboutSection = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between py-16 px-4 lg:px-32 bg-gray-100 mt-14">
            {/* Text side */}
            <div className="lg:w-1/2 lg:mx-8 mb-8 lg:mb-0">
                <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-700 mb-6">
                    Welcome to Kiddos, your ultimate destination for all things toys! We're dedicated to bringing smiles to kids' faces by offering a wide range of fun and imaginative toys that spark creativity and delight. Our mission is to provide high-quality toys that foster learning, play, and unforgettable childhood memories.
                </p>
                <p className="text-gray-700">
                    With a passion for play and a commitment to safety, we curate a collection of toys that inspire exploration and adventure. From classic favorites to the latest innovations, our selection caters to kids of all ages and interests. Join us on a journey filled with joy, laughter, and endless playtime possibilities!
                </p>
            </div>
            {/* Image side */}
            <div className="lg:w-1/2">
                <img
                    className="rounded-lg shadow-lg  w-full"
                    src="https://junotoys.themerex.net/wp-content/uploads/elementor/thumbs/img-h1-copyright-pjttqvwalbrnw817unztz81psqjvvc3rr9033y79eu.jpg"
                    alt="About Us"
                />
            </div>
        </div>
    );
};

export default AboutSection;
