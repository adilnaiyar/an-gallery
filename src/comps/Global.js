import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }`;

  export const ToggleContainer = createGlobalStyle`

  button{
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    outline: none;  
    padding: 0.5rem;
    position: relative;
    width: 4rem;
    height: 2rem;

    svg {
      height: 1rem;
      width: 2rem;
      transition: all 0.3s linear;
      
      // sun icon
      &:first-child {
        transform: ${({ lightTheme}) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      }
      
      // moon icon
      &:nth-child(2) {
        transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      }
    }
  }
`;