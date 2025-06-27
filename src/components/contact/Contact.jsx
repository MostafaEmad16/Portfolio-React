import React, { useRef } from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "mostafa.0522032@gmail.com",
    link: "mailto:mostafa.0522032@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Mostafa Emad",
    link: "https://m.me/Mostafa Emad ",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01205034234",
    link: "https://api.whatsapp.com/send?phone=01205034234",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_20yrhoa",
      "template_eqevhgn",
      form.current,
      "LU_XpOEXwSxJ6GTf3"
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="contaienr conatact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Yore Email" name="email" />
          <textarea
            rows={10}
            name="message"
            id=""
            placeholder="Enter Your Message "
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
