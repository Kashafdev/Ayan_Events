import Hero from "../Components/Hero/Hero";
import img from "../assests/ServiceImg.png";
import OurServices from "../Components/OurService/OurServices";
import Layout from "../layout";


function Services(){
    return(
        <Layout>
         <>
          <Hero
            cName="hero-mid"
            Img={img}
            title="Services"
             
            btnClass="hide"
           
          />
          <OurServices/>
        </>
        </Layout>
    )

}
export default Services;