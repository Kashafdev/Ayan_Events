import Navbar from "../layout/header/Navbar"
import Hero from "../Components/Hero/Hero";
import img from "../assests/aboutImg.jpg";
import Footer from "../layout/footer/Footer";
import AboutUs from "../Components/aboutUs/AboutUs";


function About() {
    return(
        <>
          <Navbar />
          <Hero
            cName="hero-mid"
            Img={img}
            title="About"
             
            btnClass="hide"
           
          />
          <AboutUs/>
          <Footer/>
        </>
        
    );

}
export default About;