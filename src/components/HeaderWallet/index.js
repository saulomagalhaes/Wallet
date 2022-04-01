import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from './wallet.jpg';

class Header extends React.Component {
  totalExpenses = () => {
    const { stateExpenses } = this.props;
    const valueAndCurrrency = stateExpenses.map((expense) => [
      parseInt(expense.value, 10),
      expense.currency,
    ]);
    const exchangeRates = Object.values(stateExpenses[0].exchangeRates);
    const total = valueAndCurrrency.reduce((acc, curr) => {
      const [value, currency] = curr;
      const rate = exchangeRates.find((rates) => rates.code === currency);
      return acc + value * rate.ask;
    }, 0);
    return total.toFixed(2);
  };

  render() {
    const { stateUser, stateCurrencies, stateExpenses } = this.props;
    return (
      <header className="header">
        <img src={ wallet } alt="" />
        <p data-testid="email-field">
          {' '}
          {stateUser}
          {' '}
        </p>
        <p data-testid="total-field">
          {stateExpenses.length === 0 ? 0 : this.totalExpenses()}
        </p>
        <p data-testid="header-currency-field">{stateCurrencies[0]}</p>
      </header>
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
  stateCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
