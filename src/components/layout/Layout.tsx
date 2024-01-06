import React from "react";
import Header from "../module/Header";
import Footer from "../module/Footer";

type childrenT = {children : React.ReactNode}

export default function Layout({ children }:childrenT) {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
