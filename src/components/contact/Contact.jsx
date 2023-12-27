import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n2m8qu7",
        "template_1zjcxei",
        form.current,
        "HYd3LoshR2U8wnQyJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>nilkantheamol001@gmail.com</h5>
            <a href="mailto: nilkantheamol001@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9970438133</h5>
            <a href="https://api.whatsapp.com/send?phone+919970438133">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <AiFillInstagram className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>amol_25470</h5>
            <a href="https://instagram.com">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
