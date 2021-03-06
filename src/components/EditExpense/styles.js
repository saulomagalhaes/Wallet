import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  padding: 1rem 1rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: 1.6rem;
      color: var(--label);
    }
    input {
      font-size: 1.6rem;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
      background: var(--input);
      color: var(--text-input);

      &::placeholder {
        color: var(--placeholder);
      }

      &#description {
        margin-bottom: 1rem;
      }
    }

    select {
      font-size: 1.6rem;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
      background: var(--select);
      color: var(--text-select);
      
      option{
        color: var(--text-select);
      }
    }

    button {
      font-size: 1.6rem;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
      background: var(--button);
      color: var(--text-button);
    }
  }

  @media (min-width: 992px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export default Container;
