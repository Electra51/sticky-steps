"use client";
import { HomeBanner } from "@/components/Ui/HomeBanner";
import Footer from "@/components/Ui/layoutComponent/Footer";
import Header from "@/components/Ui/layoutComponent/Header";
import { Button } from "keep-react";
const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Footer />
    </div>
  );
};
export default HomePage;
