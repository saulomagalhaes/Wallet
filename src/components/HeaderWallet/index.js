import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './styles';
import wallet from './wallet.jpg';

class Header extends React.Component {
  totalExpenses = () => {
    const { stateExpenses } = this.props;
    const valueAndCurrrency = stateExpenses.map((expense) => [
      parseFloat(expense.value),
      expense.currency,
    ]);
    const total = valueAndCurrrency.reduce((acc, curr, index) => {
      const exchangeRates = Object.values(stateExpenses[index].exchangeRates);
      const [value, currency] = curr;
      const rate = exchangeRates.find((rates) => rates.code === currency);
      return acc + value * rate.ask;
    }, 0);
    return total.toFixed(2);
  };

  render() {
    const { stateUser, stateExpenses } = this.props;
    return (
      <Container>
        <div className="title">
          <img src={ wallet } alt="Carteira" />
          <h1>My Wallet</h1>
        </div>
        <div className="infos">
          <p data-testid="total-field">
            Valor Total: R$
            {stateExpenses.length === 0 ? 0 : this.totalExpenses()}
          </p>
          <p data-testid="header-currency-field">Moeda: BRL</p>
          <p data-testid="email-field">
            {' '}
            {stateUser}
            {' '}
          </p>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  stateUser: state.user.email,
  stateCurrencies: state.wallet.currencies,
  stateExpenses: state.wallet.expenses,
});

Header.propTypes = {
  stateUser: PropTypes.string.isRequired,
  stateExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
