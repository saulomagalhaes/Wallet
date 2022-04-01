import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import trybe from './trybe.png';
import { requestLogin } from '../../actions';

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
    const atSymbol = email.indexOf('@');
    const dot = email.indexOf('.');
    if (atSymbol < 1) return false;
    if (dot <= atSymbol + 2) return false;
    if (dot === email.length - 1) return false;

    return true;
  }

  validateInputs = () => {
    const { password } = this.state;
    const minLength = 6;
    const isValidEmail = this.validateEmail();

    if (password.length === minLength && isValidEmail === true) {
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
      <form className="form-login">
        <img src={ trybe } alt="Trybe" />
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
