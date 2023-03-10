import Navbar from "../layout/header/Navbar"
import Hero from "../Components/Hero/Hero";
import Img from "../assests/heroImg.png";
import Weddings from "../Components/Wedding/Weddings";
import OurWedding from "../Components/OurWedding/OurWedding";
import Footer from "../layout/footer/Footer";

function Home(){
    return(
        <>
         <Navbar />
          <Hero
            cName="hero"
            Img={Img}
            title="PLAN | MANAGE | DISCOVER"
            text="Your day , Your way"
            buttonText="LOGIN"
             url="/"
             btnClass="show"
          />
         <Weddings/>
         <OurWedding/>
         <Footer/>
        </>
        
    )

}
export default Home;