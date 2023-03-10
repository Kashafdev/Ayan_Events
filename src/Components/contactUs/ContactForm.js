import "./ContactFormStyle.css";

function ContactForm(){
    return(
       <div className="from-container">
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder="Name" required/>
            <input placeholder="Email" required/>
            <input placeholder="Subject" required/>
            <textarea placeholder="Message" rows="4" required></textarea>
             <button>Send Message</button>
        </form>
       </div>
    )

}
export default ContactForm;