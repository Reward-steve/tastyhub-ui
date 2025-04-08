import { services } from "../../data/data";
import Image from "next/image";

export const AboutSection = () => (
  <section className="h-auto" id="about">
    <div className="text-center px-10 obs">
      <h2 className="text-2xl text-orange-500">What We Do 🍽️</h2>
      <p>
        At TastyHub, we serve more than just food—we create unforgettable dining
        experiences. From freshly prepared meals to doorstep delivery, we ensure
        quality, taste, and convenience in every bite.
      </p>
    </div>
    <ul className="flex justify-around flex-wrap w-full gap-5 p-5 h-auto mb-35">
      {services.map((el, id) => {
        return (
          <li key={id} className="service">
            <Image src={el.img} loading="lazy" alt={`service_${el.img}`} />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </li>
        );
      })}
    </ul>
  </section>
);
