import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;

    --header:#004643;
    --text-header:#fffffe;

    --input: #004643;
    --select: #004643;
    --label:#001e1d;

    --text-input:#fffffe;
    --text-select:#fffffe;
    --placeholder:#fffffe;

    --table: #004643;

    --button: #f9bc60;
    --text-button: #001e1d;
    
    --footer: #004643;

    --background: #abd1c6;
    --shape: #fffffe;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 10PX = 1REM
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{ //PQ ESSAS TAGS NAO IMPORTAM A FONT DO BODY AUTOMATICO
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{  //TUDO QUE ESTIVER DESABILITADO NA APLICACAO FAZ ISSO
    opacity: 0.8;
    cursor: not-allowed;
  }


`;

export default GlobalStyle;
