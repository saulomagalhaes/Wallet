import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { stateUser, stateCurrencies, stateExpenses } = this.props;
    return (
      <header className="header">
        <p data-testid="email-field">
          {' '}
          {stateUser}
          {' '}
        </p>
        <p data-testid="total-field">
          {stateExpenses.length > 0 ? stateExpenses.reduce((acc, curr) => acc + curr) : 0}
        </p>
        <p data-testid="header-currency-field">
          {stateCurrencies[0]}
        </p>
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
  stateExpenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, null)(Header);
