import styled from 'styled-components';


export const Wrapper = styled.div`
  margin: 60px 10px;
  h1 {
    font-weight: 400;
  }
  p {
    font-size: 2em;
    font-weight: 400;
  }
  @media only screen and (max-width: 768px){
    margin: 20px 10px;
    h1, p {
      font-size: 1.5em;
    }
  }
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  p {
    font-size: 1.3em;
  }
  @media only screen and (max-width: 768px){ 
    p {
      font-size:  1.1em;
    }
  }
`;

export const ThirdLine = styled.div`
  margin-top: 15px;
  p {
    font-size: 1.7em;
    font-weight: 400;
  }
  @media only screen and (max-width: 768px){
    p {
      font-size:  1.1em;
    }
  }
`

export const FourthLine = styled.div`
  p {
    margin-top: 6px;
    font-size: 1.2em;
  }
`;

export const GrayText = styled.p`
  color: #ccc;
  @media only screen and (max-width: 768px){
    span {
      display: block;
    }
  }
`;
export const GreenText = styled.p`
  color: #4fcf80;
`;
