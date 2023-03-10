import Hero from "../Components/Hero/Hero";
import img from "../assests/OurVendersImg.png";
import Venders from "../Components/Venders/Venders";
import Layout from "../layout";

function OurVenders(){

    return(
      <Layout>
        <>
          <Hero
            cName="hero-mid"
            Img={img}
            title="OurVenders"
             
            btnClass="hide"
           
          />
          <Venders/>
        </>
        </Layout>
        
    )

}
export default OurVenders;