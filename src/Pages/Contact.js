import Navbar from "../layout/header/Navbar"
import Hero from "../Components/Hero/Hero";
import img from "../assests/ContactUsImg.png";
import Footer from "../layout/footer/Footer";
import ContactForm from "../Components/contactUs/ContactForm";

function Contact(){
    return(
        <>
             <Navbar />
          <Hero
            cName="hero-mid"
            Img={img}
            title="Contact Us"
             
            btnClass="hide"
           
          />
          <ContactForm/>
          <Footer/>
        </>
        
    )

}
export default Contact;