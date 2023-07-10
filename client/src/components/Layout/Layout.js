import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        
        {children}</main>
      <Footer></Footer>
    </div>
  );
};

Layout.defaultProps={
  title:"ECommerce App",
  description:"mern stack project",
  keywords:"mern react mongo db fullstack",
  author:"Ritisha Singh",
}

export default Layout;
