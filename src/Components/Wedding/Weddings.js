import Wedding1 from "../../assests/Wedding1.jpg";
import Wedding2 from '../../assests/Wedding2.jpeg';
import Birthday1 from "../../assests/Birthday1.png";
import Birthday2 from "../../assests/Birthday2.png";
import "./WeddingsStyle.css"
import WeddingsData from './WeddingsData';



const Weddings = () =>{
    return(
        <div className="Weddings">
            <h1>Event Planner</h1>
            <p>You Deserve The Wedding of a Lifetime</p>
           <WeddingsData
            className="first-wed"
            heading="Wedding Events"
            text="You deserve the wedding of your dreams.But all too often, brides are left feeling overwhelmed and disheartened because their big day “can’t” happen the way they had hoped. You’ve dreamed about your wedding for as long as you can remember, so the thought that your dream might not come true can leave you feeling flustered and confused.We’ll bring your vision to life so the wedding of your dreams becomes a reality."
            img1={Wedding1}
            img2={Wedding2}

           />


           
           
           
           
           <WeddingsData
            className="first-wed-reverse"
            heading="Birthday Events"
            text="Come celebrate your special day with us! Our event management team specializes in creating unforgettable birthday events that will make your loved ones feel loved, appreciated, and pampered. From children's parties to adult gatherings, we offer customized packages tailored to your unique preferences and needs."
            img1={Birthday1}
            img2={Birthday2}

           />
        </div>
    )
}

export default Weddings;