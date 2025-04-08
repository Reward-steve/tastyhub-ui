import React from "react";

const IntroSection = () => (
  <div className="getintouch_intro_section">
    <a href="/" className="logo">
      <h1>TastyHub</h1>
    </a>
    <p>Welcome to our restaurant!</p>
    <p>
      We're here to help you find the perfect meal. From our creative menu to
      our friendly staff, we're always there to offer you a great dining
      experience.
    </p>
    <p>
      We're open from 11 AM to 10 PM, Monday to Friday, and Saturday and Sunday
      from 11 AM to 9 PM.
    </p>
    <p>Feel free to reach out if you have any questions or need assistance.</p>
    <a className="links" href="/Contact.html">
      Contact Us
    </a>

    <div className="social-media">
      {["facebook-f", "twitter", "instagram", "pinterest-p"].map((platform) => (
        <a key={platform} className="links" href="#">
          <i className={`fab fa-${platform}`}></i>
        </a>
      ))}
    </div>
  </div>
);

const ContactForm = () => {
  const clearInputs = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
  };

  return (
    <form id="contactForm" onSubmit={clearInputs}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default function Contact() {
  return (
    <div className="getintouch-container">
      <IntroSection />
      <div className="contact-form-container">
        <h2>Get in Touch!</h2>
        <ContactForm />
      </div>
    </div>
  );
}
