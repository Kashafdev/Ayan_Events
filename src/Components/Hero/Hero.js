import "./Herostyle.css"



function Hero(props){

    return(
        <>
       <div className={props.cName}>
        <img alt="HeroImg"  src={props.Img} width="1600" height="1200"></img>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        
            
        </div>
       </div>
        </>
        
    );

}
export default Hero;