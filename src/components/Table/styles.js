import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem 1rem;

  table {
    border: none;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    table-layout: fixed;
    width: 100%;

    thead,
    td {
      padding: 0.625rem;
      text-align: center;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      font-size: 0.85rem;
      height: 1px;
      letter-spacing: 0.1rem;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      text-transform: uppercase;
      width: 1px;
    }

    tr {
      background: var(--table);
      border: 1px solid #001e1d;
      border-bottom: 3px solid #001e1d;
      display: block;
      margin-bottom: 0.625rem;
      padding: 0.35rem;
      color: white;
    }

    td {
      border-bottom: 1px solid #001e1d;
      display: block;
      font-size: 1.4rem;
      text-align: right;

      &:before {
        content: attr(data-label);
        float: left;
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: uppercase;
      }

      &:last-child {
        border-bottom: none;
      }
    }

    button:first-child {
      background: var(--button);
      border: 0;
      border-radius: 0.25rem;
      margin-right: 0.3rem;
      padding: 0.3rem;
      color: var(--text-button);

      &:hover {
        filter: brightness(0.9);
      }
    }
    button:last-child {
      background: #ee3434;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.3rem;
      color: var(--text-button);

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export default Container;

/*
REFERENCIAS: https://www.felipefialho.com/blog/tutorial-tabela-responsiva/
https://codepen.io/AllThingsSmitty/pen/MyqmdM
*/
