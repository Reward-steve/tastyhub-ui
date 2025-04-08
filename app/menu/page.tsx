import React from "react";
import { Header } from "../components/menuComponent/Header";
import { IntroSection } from "../components/menuComponent/IntroSection";
import { CustomerFavoritesSection } from "../components/menuComponent/CustomerFav";
// import ; // Importing the CSS file for styling
export default function Menu() {
  return (
    <main>
      <Header />
      <div className="details">
        <IntroSection />
        <CustomerFavoritesSection />
      </div>
    </main>
  );
}
