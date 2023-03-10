import "./FooterStyle.css";
import img from "./footerImg.png";

const Footer = () =>{
    return(
        <div className="footer">
        <div className="top">
        <div>
        <h4>Ayan Events</h4>
        <p>Copyrights ©️ 2023 All Rights Reserved by AyanEvents.</p>
        </div>
          <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>  
        </div>





        <div className="bottom">
        <div>
        <h4>Services</h4>
        <a href="/">Wedding Events</a>
        <a href="/">Official Gatherings</a>
        <a href="/">Birthday Cermony</a>
        <a href="/">Lunch Parties</a>
        </div>

        <div>
        <h4>Our Vendors</h4>
        <a href="/">Catering</a>
        <a href="/">Mehndi Artists</a>
        <a href="/">Clothing Brands</a>
        <a href="/">Event & Decoration planner</a>
        </div>

        <div>
        <a href="mailto:kashafnaeem963@gmail.com"><i class="fa-solid fa-envelope"></i>AyanEvents@gamil.com</a>
        <a href="/"><i class="fa-solid fa-phone"></i>Naeem Ahmad</a>
        03094627141
        <a href="/"><i class="fa-solid fa-phone"></i>Ayan Naeem</a>
        03244481858
        <a href="/"><i class="fa-regular fa-location-dot"></i>Main Bazar Darogawala Lahore</a>
        </div>
        </div>

        </div>
    )
}
export default Footer;