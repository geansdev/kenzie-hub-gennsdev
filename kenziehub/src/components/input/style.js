import styled from "styled-components";

export const StyledInput = styled.fieldset`
   max-width: 370px;
   display: flex;
   flex-direction: column;
   gap: 0.7rem;

    label{
      font-weight: 400;
      font-size: 12.182px;
      line-height: 0px;
      color: var(--white);
      margin-bottom: 0.5rem;
    }

    input, select{
       width:100%;
       height: 48px;
       padding-left: 0.5rem;
       background: var(--grey-2);
       border-radius: 4px;
       border: ${props => `1.3px solid ${props.border}`};
    }
`