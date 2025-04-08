export const Header = () => (
  <header className="w-full h-screen flex items-center justify-center bg-cover bg-center relative">
    <section className="w-[90%] rounded-xl relative bg-#000">
      <h1 className="text-2xl font-bold">
        Welcome To <span className="text-orange-500">TastyHub</span> Your Go-To
        Food Spot
      </h1>
      <p className="m-auto items-center italic">
        At TastyHub Your Go-To Food Spot, we bring you delicious, freshly
        prepared meals made with love. Whether you're dining in, taking out, or
        ordering online, we guarantee great flavors and fast service.
      </p>
      <div className="cta_holder">
        <a href="/Menu.html" className="cta">
          Discover Our Menu
        </a>
      </div>
    </section>
  </header>
);
