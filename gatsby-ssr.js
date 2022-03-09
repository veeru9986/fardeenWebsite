import React from "react";
import Layout from "./src/components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./src/app/store";
import { Provider } from "react-redux";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
