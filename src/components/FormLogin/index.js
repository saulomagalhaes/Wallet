import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions';
import Content from './styles';
import walletImg from './wallet.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.validateInputs());
  };

  validateEmail = () => {
    const { email } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    return regex.test(email);
  }

  validateInputs = () => {
    const { password } = this.state;
    const minLength = 6;
    const isValidEmail = this.validateEmail();

    if (password.length >= minLength && isValidEmail === true) {
      return this.setState({ disabled: false });
    }

    this.setState({ disabled: true });
  };

  saveUser = (event, login) => {
    const { email } = this.state;
    event.preventDefault();
    login(email);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password, disabled } = this.state;
    const { login, history } = this.props;
    return (
      <Content>
        <form className="form-login">
          <img src={ walletImg } alt="Trybe" />
          <a hidden href="https://storyset.com/money">Money illustrations by Storyset</a>
          <input
            type="email"
            name="email"
            className="input-email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleChange }
            value={ email }
          />
          <input
            type="password"
            name="password"
            className="input-password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.handleChange }
            value={ password }
            autoComplete="on"
          />
          <button
            type="submit"
            disabled={ disabled }
            onClick={ (event) => {
              this.saveUser(event, login);
              return history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </form>
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(requestLogin(email)),
});

Form.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Form);

/* REFERENCIAS:
LINHA 25 A 29: https://qawithexperts.com/article/javascript/email-validation-using-javascript-with-or-without-regex/317
*/
