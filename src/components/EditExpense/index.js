import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './styles';
import { receiveEditExpense } from '../../actions';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      id: 0,
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { editExpense } = this.props;
    this.setState({
      value: editExpense.value,
      currency: editExpense.currency,
      method: editExpense.method,
      tag: editExpense.tag,
      description: editExpense.description,
      id: editExpense.id,
      exchangeRates: editExpense.exchangeRates,
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  editExpense = (event, getEditExpense) => {
    const { value, currency, method, tag, description, id, exchangeRates } = this.state;
    event.preventDefault();
    getEditExpense({ id, value, currency, method, tag, description, exchangeRates });
    this.setState({
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      id: 0,
      exchangeRates: {},
    });
  };

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { stateCurrencies, getEditExpense } = this.props;
    return (
      <Container>
        <form className="form">
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
            M??todo de pagamento:
            <select
              id="method"
              name="method"
              onChange={ this.handleChange }
              value={ method }
              data-testid="method-input"
            >
              <option value="Cart??o de cr??dito">Cart??o de cr??dito</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cart??o de d??bito">Cart??o de d??bito</option>
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
              <option value="Alimenta????o">Alimenta????o</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Sa??de">Sa??de</option>
            </select>
          </label>

          <label htmlFor="description">
            Descri????o:
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
            onClick={ (event) => this.editExpense(event, getEditExpense) }
          >
            Editar despesa
          </button>
        </form>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  stateCurrencies: state.wallet.currencies,
  editExpense: state.wallet.editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getEditExpense: (expense) => dispatch(receiveEditExpense(expense)),
});

Edit.propTypes = {
  stateCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editExpense: PropTypes.arrayOf(PropTypes.string).isRequired,
  getEditExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
