import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/HeaderWallet';
import Form from '../components/ExpenseForm';
import Edit from '../components/EditExpense';
import Table from '../components/Table';
import { fetchAPI } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getFetchAPI } = this.props;
    getFetchAPI();
  }

  render() {
    const { getEdit } = this.props;
    return (
      <>
        <Header />
        {getEdit ? <Edit /> : <Form />}
        <Table />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchAPI: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  getEdit: state.wallet.edit,
});

Wallet.propTypes = {
  getFetchAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
