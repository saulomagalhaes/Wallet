import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: var(--footer);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 12rem;

  a {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 992px) {
    margin-top: 8.1rem;
  }
`;

export default Container;
