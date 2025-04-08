export const IntroSection = () => (
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
