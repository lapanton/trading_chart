import React, { useEffect, useCallback, useState } from 'react';
import { Wrapper, FirstLine, SecondLine, GreenText, GrayText, ThirdLine, FourthLine } from "./styled";

const CompanyData = () => {
  const [companyData, setCompanyData] = useState();

  const getCompanyData = async () => {
      try {
        // I know this is not secure
        await fetch(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_e19d209808964780b0406c1806cd1d37`)
          .then(res => res.json())
          .then(data => {
            setCompanyData(data)
          });
      } catch (e) {
        alert('Something goes wrong with load');
      }
    };

    useEffect(() => {
      getCompanyData();
      const intervalId = setInterval(() => {
        getCompanyData();
      }, 30000);
      return () => {

        clearInterval(intervalId);
      }
    }, []);

  return (
    <>
      <Wrapper>
        <FirstLine>
          <h1>
            AAPL
          </h1>
          <p>
            {companyData && companyData.latestPrice}
          </p>
        </FirstLine>
        <SecondLine>
          <GrayText>Apple Inc. <span>Telecommunications equipment</span></GrayText>
          <GreenText>{companyData && companyData.change}%</GreenText>
        </SecondLine>
        <ThirdLine>
          <p>Earnings: 2021-02-25 (BMO)</p>
        </ThirdLine>
        <FourthLine>
          <GrayText>Market Cap: {companyData && companyData.marketCap}</GrayText>
        </FourthLine>
      </Wrapper>
    </>
  )
}

export default CompanyData;