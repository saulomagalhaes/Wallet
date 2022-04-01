import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { stateCurrencies } = this.props;
    return (
      <form className="form">
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            data-testid="value-input"
            type="number"
            placeholder="Valor"
          />
        </label>
        <label htmlFor="select-currency">
          Moeda:
          <select id="select-currency">
            {stateCurrencies.map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de crédito</option>
            <option value="Cartão de Débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria:
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Categoria:
          <input
            id="description"
            data-testid="description-input"
            type="text"
            placeholder="Despesa"
          />
        </label>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  stateCurrencies: state.wallet.currencies,
});

Form.propTypes = {
  stateCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Form);
