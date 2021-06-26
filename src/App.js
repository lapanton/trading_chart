import React from "react";
import { createGlobalStyle } from "styled-components";
import CompanyData from "./components/companyData";
import Chart from "./components/chart";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    h1, p {
      margin: 0;
      padding: 0;
    }
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <CompanyData/>
      <Chart/>
    </>
  );
}

export default App;
