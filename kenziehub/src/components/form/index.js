import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 370px;
  width:100%;
  padding: 4rem 1rem;
  background: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    text-align: center;
  }

  h2{
    margin: 0 auto;
    color: var(--white);
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  p{
    font-size: 12px;
    color: var(--color-red);
  }
    
  span{
    color: var(--grey-1);
    font-size: 12px;
  }
  
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;

    background: var(--grey-1);
    border: 1.2182px solid var(--grey-1);
    border-radius: 4px;
    color: var(--white);
  }
`
