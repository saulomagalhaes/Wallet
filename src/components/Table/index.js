import React, { Component } from 'react';
import './styles.css';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {/* <tbody>
        <tr>

        </tr>
        </tbody> */}
      </table>
    );
  }
}

export default Table;
