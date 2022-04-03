import React, { Component } from 'react';
import './styles.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <a href="https://github.com/saulomagalhaes" target="_blank" rel="noopener noreferrer">
            <FaGithub size={ 35 } color="black" />
          </a>
          <a href="https://www.linkedin.com/in/sauloam/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={ 35 } color="black" />
          </a>
        </div>
        <p>Desenvolvido por Saulo Alves Magalhães</p>
      </footer>
    );
  }
}

export default Footer;
