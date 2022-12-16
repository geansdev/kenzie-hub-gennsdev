import styled from "styled-components";

export const StylesListTechs = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 1rem;
  background: #343B41;
  border-radius: 4px;
    li{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      
      background: #121214;
      border-radius: 4px;
    }

    .divDeleteButton{
      max-width: 150px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
`