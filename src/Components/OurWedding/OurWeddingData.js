import "./OurWeddingStyle.css"
import OurWedding from "./OurWedding";


function OurWeddingData(props){
    return(
        <div className= "wed-card">
         <div className= "wed-image">
          <img src={props.image} alt="image"/>  
         </div>
         <h4>{props.heading}</h4>
         <p>{props.text}</p>
        </div>
    );

}

export default OurWeddingData;