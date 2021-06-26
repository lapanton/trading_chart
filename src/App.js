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
    ul {
      background: white;
      padding: 10px;
      border: 1px solid #000;
      border-radius: 10px;
      width: 140px;
    }
    ul li {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
    ul li div:first-child{
      font-weight: 100;
    }
    ul li div:last-child {
      font-weight: 400;
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
