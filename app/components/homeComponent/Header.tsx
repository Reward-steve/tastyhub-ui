import Link from "next/link";
import bg_image from "../../images/3.jpg";

export const Header = () => (
  <header
    className="w-full h-screen flex items-center justify-center bg-cover bg-center relative rounded-lg"
    style={{
      backgroundImage: `url(${bg_image.src})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}
  >
    <section
      className="w-[90%] max-w-4xl bg-black bg-opacity-50 rounded-xl p-10 flex flex-col items-center text-center"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <h1 className="text-4xl font-extrabold text-white mb-4">
        Welcome to <span className="text-orange-500">TastyHub</span>
      </h1>
      <p className="text-lg text-gray-300 italic mb-6">
        At TastyHub, we bring you delicious, freshly prepared meals made with
        love. Whether you're dining in, taking out, or ordering online, we
        guarantee great flavors and fast service.
      </p>
      <div className="mt-4">
        <Link
          href="/menu"
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
        >
          Discover Our Menu
        </Link>
      </div>
    </section>
  </header>
);
