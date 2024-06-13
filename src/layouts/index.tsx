import React from "react";
// import styles from "./layout.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
