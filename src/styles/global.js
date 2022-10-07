import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {

    /* style guide */

      /* Color Style guide */
        /* Primary Palette */

        --color-primary-green: #018762;
        --color-primary-rosa: #DF1092;

        /* Grey Scale Palette */

        --color-grey-6: #FFFFFF;
        --color-grey-5: #EEEEEE;
        --color-grey-4: #CFCFCF;
        --color-grey-3: #515151;
        --color-grey-2: #2D2D2D;
        --color-grey-1: #1F1F1F;

        /* Green Scale Palette */

        --color-green-7: #F3FFF9;
        --color-green-6: #CFCFCF;
        --color-green-5: #29CC9F;
        --color-green-4: #36B390;
        --color-green-3: #007756;
        --color-green-2: #3A5C53;
        --color-green-1: #CFCFCF;

        /* Pink Scale Palette */

        --color-pink-1: #650042;
        --color-pink-1: #A3096E;
        --color-pink-1: #C40E86;
        --color-pink-1: #DF1098;
        --color-pink-1: #FF4DC2;
        --color-pink-1: #F78DCE;
        --color-pink-1: #FFC2EA;

        /* Semantics Palette */

        --color-info: #29598C;
        --color-error: #BC1C1C;
        --color-alert: #C75126;
        --color-sucess: #0B854A;
        --color-yellow: #FFD569;

        /* Gradient Palette */

        --color-gradient-3: linear-gradient(276.76deg, #018383 15.85%, #36B390 121.65%);
        --color-gradient-2: linear-gradient(180deg, #DF2310 0%, rgba(186, 23, 226, 0.96) 100%);
        --color-gradient-1: linear-gradient(108.73deg, #F970CB 10.86%, #FF00AA 152.15%);

      /* Text Style guide */

        /* fonte style */

        /* --font-roboto: 'Roboto', sans-serif; */
        --font-roboto: 'Roboto';

        /* Typography */

        /* Headline */

        --font-title-1: normal 48px var(--font-roboto);
        --font-title-2: normal 40px var(--font-roboto);
        --font-title-3: normal 32px var(--font-roboto);
        --font-title-4: normal 24px var(--font-roboto);
        --font-title-5: normal 18px var(--font-roboto);

        /* Body */
        
        --font-body-18: normal 18px var(--font-roboto);
        --font-body-16: normal 16px var(--font-roboto);
        --font-body-14: normal 14px var(--font-roboto);
        --font-body-12: normal 12px var(--font-roboto);

    font-size: 62.5%;
    
  }

  @media (min-width: 700px) {
    :root {
       font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    max-width: 100vw;
    min-height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-green);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-green);
  }
`;
