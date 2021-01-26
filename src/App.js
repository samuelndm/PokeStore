import React from "react";
import GlobalStyles from "./assets/styles/GlobalStyles";
import "./assets/styles/sass/base.scss";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
};

export default App;
