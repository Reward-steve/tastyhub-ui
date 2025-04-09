import Link from "next/link";

export const Footer = () => (
  <footer className="backdrop:blur-2xl bg-rgba(0, 0, 0, 0.8) text-white py-[80px] text-center w-full">
    <div className="flex flex-wrap justify-around items-center max-w-[1200px] m-auto">
      <div className="footer-logo">
        <h2 className="text-2xl mb-5 text-orange-500">TastyHub</h2>
        <p>Delicious food, great taste.</p>
      </div>
      <div className="footer-links">
        <h2 className="text-orange-500">Quick Links</h2>
        <ul className="list-none p-0">
          {["home", "menu", "about", "contact"].map((link, index) => (
            <li key={index} className="my-2">
              <Link
                href={link === "home" ? "/" : `/${link}`}
                className="hover:text-orange-500"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-contact">
        <h2 className="text-orange-500">Contact Us</h2>
        <p>📍 123 Food Street, City</p>
        <p>📞 +123 456 7890</p>
        <p>
          📧
          <a href="#" className="text-white">
            tastyhub@gmail.com
          </a>
        </p>
      </div>
      <div className="footer-social">
        <h2 className="text-orange-500">Follow Us</h2>
        <a href="#">
          <i className="hover:text-blue-500"></i>
        </a>
        <a href="#">
          <i className="hover:text-red-500"></i>
        </a>
        <a href="#">
          <i className="hover:text-cyan-400"></i>
        </a>
      </div>
    </div>
    <div className="mt-5 border-t-1 border-#444 pt-2.5">
      <p>© 2024 Restaurant Name. All rights reserved.</p>
    </div>
  </footer>
);
