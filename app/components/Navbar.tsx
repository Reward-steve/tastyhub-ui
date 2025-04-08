import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";

export const Navbar = () => (
  <nav className="w-full h-20 flex items-center justify-between px-10">
    <Link
      href="/"
      className="w-[70px] h-[70px] flex items-center justify-center"
    >
      <Image src={logo} alt="Logo" className="w-full h-full" />
    </Link>
    <div className="w-[40px] h-[20px] flex flex-col items-center justify-between cursor-pointer">
      <div className="w-[80%] h-[15%] bg-orange-500 rounded-xl"></div>
      <div className="w-[80%] h-[15%] bg-orange-500 rounded-xl"></div>
      <div className="w-[80%] h-[15%] bg-orange-500 rounded-xl"></div>
    </div>
    <ul className="w-[40%] h-full flex justify-between items-center">
      {["home", "about", "menu", "contact"].map((item, index) => (
        <li
          key={index}
          className="text-orange-500 cursor-pointer hover:text-orange-600 transition-all duration-300"
        >
          <Link href={item === "home" ? "/" : `/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
