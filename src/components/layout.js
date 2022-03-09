import React from "react";
import Helmet from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";

function Layout({ children, location }) {
  console.log(location);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=none"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <TypographyStyles />
      <Navbar
        positionS={
          location.pathname.match("/sign-in/*") ||
          location.pathname.match("/sign-up/*")
            ? 0
            : 1
        }
      />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
