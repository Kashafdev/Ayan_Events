import "./OurWeddingStyle.css";
import OurWeddingData from "./OurWeddingData";
import Mehndi from "../../assests/Mehndi (2).png";
import  Barat from "../../assests/Barat.png";
import Walima from "../../assests/Walima.png";

function OurWedding() {
  return (
     <div className="Wedding">
        <h1>Our Weddings</h1>
        <p>Have a Wedding People Can’t Stop Talking About</p>
        <div className="wedCard">

        <OurWeddingData
            image={Mehndi}
            heading="Mehndi Event"
            text="At our Mehndi events, we aim to create an atmosphere of celebration and joy, where every guest feels welcomed and appreciated. We take pride in our ability to create a unique and unforgettable experience that our clients will cherish for years to come."/>
        

        <OurWeddingData
            image={Barat}
            heading="Barat Event"
            text="Our team of experts ensures that every guest is welcomed with warmth and hospitality, making them feel like a part of the celebration. With our attention to detail and commitment to excellence, we guarantee that our clients will have an unforgettable Barat event."/>
     
        <OurWeddingData
            image={Walima}
            heading="Walima Event"
            text=" we understand the significance of the Walima event and strive to create an atmosphere of elegance and sophistication. Our team of experts works closely with our clients to design a personalized and unique celebration that reflects their taste and preferences. "/>
     
     
     
     
     
     </div>
     
     
     </div>
     
      
  ) 
}

export default OurWedding;



