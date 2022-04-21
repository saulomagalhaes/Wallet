import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editExpense } from '../../actions/index';

class Table extends Component {
  generateData = () => {
    const { stateExpenses, doDeleteExpense, doEditExpense } = this.props;
    return stateExpenses.map((expense, index) => {
      const exchangeRates = Object.values(stateExpenses[index].exchangeRates);
      const rate = exchangeRates.find(
        (rates) => rates.code === expense.currency,
      );
      const { name, ask } = rate;
      const total = expense.value * ask;
      return (
        <tr key={ expense.id }>
          <td data-label="Descrição">{expense.description}</td>
          <td data-label="Categoria">{expense.tag}</td>
          <td data-label="Forma de Pagamento">{expense.method}</td>
          <td data-label="Valor">{parseFloat(expense.value).toFixed(2)}</td>
          <td data-label="Conversão">{name}</td>
          <td data-label="Cotação">{parseFloat(ask).toFixed(2)}</td>
          <td data-label="Total">{parseFloat(total).toFixed(2)}</td>
          <td data-label="Moeda">Real</td>
          <td data-label="Opções">
            <button
              type="button"
              data-testid="edit-btn"
              onClick={ () => doEditExpense(expense) }
            >
              Editar
            </button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => doDeleteExpense(expense.id) }
            >
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
      <table className="table">
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

const mapDispatchToProps = (dispatch) => ({
  doDeleteExpense: (id) => dispatch(deleteExpense(id)),
  doEditExpense: (expense) => dispatch(editExpense(expense)),
});

Table.propTypes = {
  stateExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  doDeleteExpense: PropTypes.func.isRequired,
  doEditExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
