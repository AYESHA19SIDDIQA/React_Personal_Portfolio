// Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="profile-picture">
      <img src={require("./Ayesha.jpeg")} alt="Ayesha Siddiqa" className="profile-img" />

      </div>
      <h2>Contact</h2>
      
      <p><b>Email:</b> asiddiq.bese22seecs@seecs.edu.pk</p>
      <p><b>Phone:</b> +123-456-7890</p>
      <p><b>Location:</b> Islamabad, Pakistan</p>
      <p><b>GitHub:</b> <a href="https://github.com/AYESHA19SIDDIQA" target="_blank" rel="noopener noreferrer">AYESHA19SIDDIQA</a></p>
      <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/ayesha-siddiqa-447348256/" target="_blank" rel="noopener noreferrer">asiddiqa</a></p>
    </div>
  );
};

export default Contact;