import React from "react";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/homeComponent/Header";
import { AboutSection } from "../components/homeComponent/AboutSection";
import { TestimonialsSection } from "../components/homeComponent/TestimonialsSection";
import { TeamSection } from "../components/homeComponent/TeamSection";
import { Footer } from "../components/homeComponent/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <TestimonialsSection />
      <TeamSection />
      <Footer />
    </>
  );
}
