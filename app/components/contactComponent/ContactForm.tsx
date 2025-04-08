export const ContactForm = () => {
  //   const clearInputs = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const form = event.currentTarget;
  //     form.reset();
  //   };

  return (
    <form id="contactForm">
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
