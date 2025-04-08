import { discover_our_menu } from "../../data/data";

export const IntroSection = () => (
  <section className="intro_section">
    <header>
      <h1>🍽 Discover Our Menu</h1>
      <p>
        Explore a variety of delicious meals crafted with the finest
        ingredients. From light appetizers to hearty main courses and sweet
        desserts, there’s something for everyone!
      </p>
    </header>
    <h1>🌟 Featured Categories</h1>
    <ul id="menuList">
      {discover_our_menu.map((el, id) => {
        return (
          <li key={id}>
            🔸<span className="text-orange-500">{el.title}</span>
            {el.listContent}
          </li>
        );
      })}
    </ul>
  </section>
);
