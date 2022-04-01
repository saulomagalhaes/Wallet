// Coloque aqui suas actions
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const FAILURE_RECEIVE_CURRENCIES = 'FAILURE_RECEIVE_CURRENCIES';

export const requestLogin = (email) => ({
  type: RECEIVE_LOGIN,
  email,
});

export const receiveCurrencies = (data) => {
  const keys = Object.keys(data);
  const currencies = keys.filter((currency) => currency !== 'USDT');
  return {
    type: RECEIVE_CURRENCIES,
    currencies,
  };
};

export const failureReceiveCurrencies = (error) => ({
  type: FAILURE_RECEIVE_CURRENCIES,
  error,
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(receiveCurrencies(data)))
    .catch((error) => dispatch(failureReceiveCurrencies(error)));
}
