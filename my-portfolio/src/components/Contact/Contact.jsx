import { useState } from "react";
import contactImg from "../../assets/c.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './styles.scss';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact">
          <div className="contact-content">
                <h2 id="contact-me">Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-wrapper">
                    <div className="form-wrapper-name-wrapper">
                        <div className="firstname">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </ div>
                        <div className="lastname">
                            <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                        </div>
                    </div>
                    <div  className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </ div>
                    <div className="px-1">
                      <textarea  divs="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </ div>
                    {
                      status.message &&
                      < div>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </ div>
                    }
                  </div>
                </form>
          </ div>
    </section>
  )
}
