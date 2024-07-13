import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailConfigs } from "../constants";
import "./styles.scss";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        ...emailConfigs.templateDetails,
        form.current,
        emailConfigs.payloadDetails
      )
      .then(
        () => {
          setButtonText("Send");
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="header" id="contact-me">Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-wrapper">
            <div className="form-wrapper-name-wrapper">
              <div className="firstname">
                <input
                  type="text"
                  name="from_fname"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
              </div>
              <div className="lastname">
                <input
                  type="text"
                  name="from_lname"
                  value={formDetails.lasttName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </div>
            </div>
            <div className="px-1">
              <input
                type="email"
                name="user_email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </div>
            <div className="px-1">
              <textarea
                divs="6"
                name="message"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </div>
            {status.message && (
              <div>
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
