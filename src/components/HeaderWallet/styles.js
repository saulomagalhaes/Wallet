import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  height: 8rem;
  background: var(--header);
  color: var(--text-header);

  div.title {
    display: flex;
    align-items: center;
    width: 55%;

    img {
      width: 5rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  div.infos {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 45%;
    font-size: 1rem;
  }
`;

export default Container;
