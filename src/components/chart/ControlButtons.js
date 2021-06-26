import React from 'react';
import { Wrapper, Items } from "./styled";


const ControlButtons = () => {
  return  (
    <>
      <Wrapper>
        <Items>1D</Items>
        <Items>1W</Items>
        <Items>1M</Items>
        <Items className='active'>3M</Items>
        <Items>6M</Items>
        <Items>1Y</Items>
        <Items>2Y</Items>
        <Items>5Y</Items>
        <Items>ALL</Items>
      </Wrapper>
    </>
  )
};

export default ControlButtons;