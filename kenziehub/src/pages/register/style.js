import styled from "styled-components";

export const StyledRegister = styled.section`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  height: 130vh;
  
    div{
     width: 100%;
     height: 100%;
     margin: 0 auto;
     max-width: 369px;
     padding: 1rem;
    }
  
    picture{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2rem;
    }
  
    picture > button{
     max-width: 68px;
     width: 100%;
     height: 41px;
     background-color: var(--grey-3);
     border-radius: 4px;
    }
`