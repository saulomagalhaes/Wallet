import React from 'react';
import './styles.css';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import trybe from './trybe.png';
// import { requestLogin } from '../../actions';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="number" placeholder="Valor" />
      </form>
    );
  }
}

export default Form;
