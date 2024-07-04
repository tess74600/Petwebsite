import React from "react";
// import styles from "./layout.module.scss";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
