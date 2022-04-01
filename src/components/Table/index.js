import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  generateData = () => {
    const { stateExpenses } = this.props;
    return stateExpenses.map((expense, index) => {
      const exchangeRates = Object.values(stateExpenses[index].exchangeRates);
      const rate = exchangeRates.find(
        (rates) => rates.code === expense.currency,
      );
      const { name, ask } = rate;
      const total = expense.value * ask;
      return (
        <tr key={ expense.id }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{parseFloat(expense.value).toFixed(2)}</td>
          <td>{name}</td>
          <td>{parseFloat(ask).toFixed(2)}</td>
          <td>{parseFloat(total).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button type="button" onClick={ () => this.handleEdit(expense) }>
              Editar
            </button>
            <button type="button" onClick={ () => this.handleDelete(expense) }>
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { stateExpenses } = this.props;
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
        <tbody>{stateExpenses.length === 0 ? '' : this.generateData()}</tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  stateUser: state.user.email,
  stateCurrencies: state.wallet.currencies,
  stateExpenses: state.wallet.expenses,
});

Table.propTypes = {
  stateUser: PropTypes.string.isRequired,
  stateCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
