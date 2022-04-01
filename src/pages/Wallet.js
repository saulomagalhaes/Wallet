import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/HeaderWallet';
import Form from '../components/ExpenseForm';
import Table from '../components/Table';
import { fetchAPI } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getFetchAPI } = this.props;
    getFetchAPI();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
        <Table />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchAPI: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  getFetchAPI: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
