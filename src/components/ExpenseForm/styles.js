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
    }
    input {
      font-size: 1.6rem;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      width: 100%;
      margin-bottom: 0.5rem;

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
    }

    button {
      font-size: 1.6rem;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;

export default Container;
