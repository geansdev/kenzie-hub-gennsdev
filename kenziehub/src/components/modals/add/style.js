import styled from "styled-components";

export const StylesModalAdd = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: var(--backmodal);
  inset: 0;
  display: flex;
  align-items: center;
  
  div{
    display: flex;
    align-items: center;
    gap: 0;
    justify-content: center;
  }

  h2{
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    color: var(--grey-0);
  }

  div > div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 370px;
    width: 100%;
    height: 100%;
    background: var(--grey-2);
    border-radius: 4px 4px 0px 0px;
  }

  .btnCloseModal{
    width: 32px;
    height: 32px;
    background: var(--grey-3);
    border-radius: 4px;
  }
`