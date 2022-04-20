import styled from 'styled-components';
import backgroundImg from './stacked-peaks-haikei.svg';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${backgroundImg});

  margin: 0 auto;
  height: 100vh;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--shape);
    border-radius: 1rem;
    padding: 2rem;
    height: 50rem;
    max-width: 30rem;
   

    input {
      width: 100%;
      height: 3.5rem;
      border-radius: 5px;
      border: 1px solid #d9d9d9;
      padding: 0 15px;
      margin-bottom: 15px;
      background: var(--input);

      &::placeholder {
        color: var(--placeholder);
        font-size: 1.4rem;
      }
    }

    button {
      width: 100%;
      height: 3.5rem;
      border-radius: 5px;
      border: 1px solid #d9d9d9;
      background: var(--button);
      color: var(--text-button);
      font-weight: 600;
      font-size: 1.4rem;
    }
  }
`;

export default Content;
