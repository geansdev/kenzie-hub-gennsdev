import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
 div{
    width: 100%;
    margin: 0 auto;
    max-width: 1000px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2, p{
    font-weight: 700;
    font-size: 18px;  
    color: var(--white);
  }

  p{
    font-weight: 400;
    font-size: 16px;
    color: var(--white);
  }

  .headerListTech{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button{
    width: 32px;
    height: 32px;
    background: var(--grey-3);
    border-radius: 4px;
  }

  span{
    font-weight: 600;
    font-size: 16px;
    color: #F8F9FA;
  }

  @media (max-width: 500px) {
    h2, p{
    display: none;
    }
  }
`