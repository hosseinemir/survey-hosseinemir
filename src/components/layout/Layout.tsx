import React from "react";
import Header from "../module/Header";
import Footer from "../module/Footer";

type childrenT = {children : React.ReactNode}

export default function Layout({ children }:childrenT) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
