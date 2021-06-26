import styled from 'styled-components';


export const Wrapper = styled.div`
  .MuiFormControl-root {
    width: 100px;
  }
  @media only screen and (max-width: 768px) {
    .MuiFormControl-root {
      width: 100px;
      margin-left: 50px;
    }
  }
`
export const Items = styled.div`
  display: inline-block;
  padding: 8px 15px;
  margin: 0 7px;
  border: 0 solid transparent;
  &.active {
    border: 2px solid #4fcf80;
    border-radius: 10px;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px){
    margin: 0 3px;
    padding: 5px 8px;
    font-size: 15px;
  }
`

export const WrapDates = styled.div``;

export const WrapActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;