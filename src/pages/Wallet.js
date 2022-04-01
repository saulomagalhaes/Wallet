import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/HeaderWallet';
import { fetchAPI } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getFetchAPI } = this.props;
    getFetchAPI();
  }

  render() {
    return <Header />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchAPI: (state) => dispatch(fetchAPI(state)),
});

Wallet.propTypes = {
  getFetchAPI: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
