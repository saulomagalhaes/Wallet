import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/FormLogin/index';

class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Form history={ history } />
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
