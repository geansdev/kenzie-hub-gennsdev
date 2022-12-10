import styled from "styled-components";

export const StyledMain = styled.main`
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

  @media (max-width: 500px) {
    h2, p{
    display: none;
    }
  }
`