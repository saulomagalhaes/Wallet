/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchExchangeRates } from '../../actions';
import Container from './styles';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',
      id: 0,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveExpense = (event, getExchangeRates) => {
    const { value, currency, method, tag, description, id } = this.state;
    event.preventDefault();
    if (description === '') {
      return toast.error('Preencha a descrição da despesa');
    }
    getExchangeRates(id, { value, currency, method, tag, description });
    this.setState((prevState) => (
      { ...prevState, value: '', id: prevState.id + 1 }
    ));
  }

  addId = () => {
    const { id } = this.state;
    this.setState({ id: id + 1 });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { stateCurrencies, getExchangeRates } = this.props;
    return (
      <Container>
        <form>

          <label htmlFor="value">
            Valor:
            <input
              id="value"
              name="value"
              data-testid="value-input"
              type="text"
              placeholder="Valor"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
              value={ currency }
            >
              {stateCurrencies.map((currencyy) => (
                <option key={ currencyy } value={ currencyy }>
                  {currencyy}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              name="method"
              onChange={ this.handleChange }
              value={ method }
              data-testid="method-input"
            >
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="category">
            Categoria:
            <select
              id="category"
              name="tag"
              onChange={ this.handleChange }
              value={ tag }
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              name="description"
              onChange={ this.handleChange }
              value={ description }
              data-testid="description-input"
              type="text"
              placeholder="Despesa"
            />
          </label>

          <button
            type="submit"
            onClick={
              (event) => this.saveExpense(event, getExchangeRates)
            }
          >
            Adicionar despesa
          </button>
        </form>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  stateCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: (id, state) => dispatch(fetchExchangeRates(id, state)),
});

Form.propTypes = {
  stateCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExchangeRates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
