import './VenderStyle.css';
import OurWeddingData from "../OurWedding/OurWeddingData";
import Mehndi from "../../assests/MehndiImg.png";
import Decore from "../../assests/Decore.png";
import Catering from "../../assests/Catering.png";
import Photo from "../../assests/PhtoImg.png";
import Venu from "../../assests/VenuImg.png";
import Djs from "../../assests/DJs.png";
import makeup from "../../assests/makeup.png";



function Venders(){
    return(
        <div className="Wedding">
        <div className="wedCard">

        <OurWeddingData
            image={Mehndi}
            heading="Mehndi"
           
        />   

        <OurWeddingData
            image={Decore}
            heading="Decore"
           
         />  

        <OurWeddingData
            image={Catering}
            heading="Catering"
        />  

        <OurWeddingData
            image={Photo}
            heading="Photography"
        />  

        <OurWeddingData
            image={Venu}
            heading="Venu"
        />  

        <OurWeddingData
            image={Djs}
            heading="DJs"
        />  

       <OurWeddingData
            image={makeup}
            heading="Makeup"
        />  
          
         
    


        
         </div>
     
     </div>



     
    )
}

export default Venders;