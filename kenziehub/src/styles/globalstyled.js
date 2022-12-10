import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color-primary: #FF577F;
    --color-primary-Focus:#FF427F;
    --color-primary-Negative:#59323F; 
    --color-red: #E83F5B;
    --grey-0:#F8F9FA;
    --grey-1:#868E96;
    --grey-2:#343B41;
    --grey-3:#212529;
    --grey-4:#121214;
    --white: #ffffff;
    --black: #000000;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
  }
  
  body{
    background-color: var(--grey-4);
  }
  
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    color: var(--white);
    border: none;
  }
  
  fieldset{
    border: none;
  }
  
  a{
    color: unset;
    text-decoration: none;
  }
`
