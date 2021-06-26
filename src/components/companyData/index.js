import React, { useEffect, useCallback, useState } from 'react';
import { Wrapper, FirstLine, SecondLine, GreenText, GrayText, ThirdLine, FourthLine } from "./styled";

const CompanyData = () => {
  const [companyData, setCompanyData] = useState();

  const getCompanyData = useCallback(async () => {
      try {
        await fetch(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_4ef2a2a96cd948499bb9ab2bf93a8476`)
          .then(res => res.json())
          .then(data => {
            setCompanyData(data)
          });
      } catch (e) {}
    }, []);

    useEffect(() => {
      getCompanyData();
      setInterval(() => {
        getCompanyData();
      }, 3000)
    }, [getCompanyData]);

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