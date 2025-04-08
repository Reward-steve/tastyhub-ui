import { favourite_list } from "./../../data/data";
import Image from "next/image";
export const CustomerFavoritesSection = () => (
  <section className="customer_fav_section">
    <h1>🔥 Customer Favorites</h1>
    <ul id="fav_list">
      {favourite_list.map((el, id) => {
        return (
          <li key={id} className="customer_fav_card">
            <div>
              <div className="img_holder">
                <Image src={el.img} alt={`image_index_${id}`} />
              </div>
              {el.context}
            </div>
          </li>
        );
      })}
    </ul>
    <div className="order-prompt">
      <p>
        📌 Ready to Order? 💡 Browse our full menu and satisfy your cravings
        today!
      </p>
      <a href="#">
        <button>View Full Menu</button>
      </a>
    </div>
  </section>
);
