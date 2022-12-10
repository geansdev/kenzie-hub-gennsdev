import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 72px;
  border-bottom: 1px solid var(--grey-3);
    div{
      width: 100%;
      margin: 0 auto;
      max-width: 1000px;
      padding: 1rem;
    }
  
    picture{
      display: flex;
      justify-content: space-between;
    }
  
    button{
      width: 56px;
      height: 32px;
      background: var(--grey-3);
      border-radius: 4px;
    }
`

export const StyledHeader = styled.header`
 height: 118px;
 border-bottom: 0.8px solid var(--grey-3);
   div{
      width: 100%;
      width:100%;
      margin: 0 auto;
      max-width: 1000px;
      padding: 1rem;
    }
  
    .InfoUser{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    h2{
      font-weight: 700;
      font-size: 18px;
      color: var(--white);
    }
  
    span{
      font-weight: 400;
      font-size: 12px;
      color: var(--grey-1);
    }

      @media (max-width: 500px) {
        .InfoUser{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.5rem;
      }
  }

`