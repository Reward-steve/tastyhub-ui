import React from "react";
import { IntroSection } from "./../components/contactComponent/IntroSection";
import { ContactForm } from "./../components/contactComponent/ContactForm";
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
