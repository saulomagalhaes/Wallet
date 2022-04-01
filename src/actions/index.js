// Coloque aqui suas actions
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const FAILURE_RECEIVE_CURRENCIES = 'FAILURE_RECEIVE_CURRENCIES';

export const RECEIVE_EXCHANGE_RATES = 'RECEIVE_EXCHANGE_RATES';

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

export const receiveExchangeRates = (data, state, id) => {
  const exchangeRates = { ...data };
  const values = { ...state };
  return {
    type: RECEIVE_EXCHANGE_RATES,
    exchangeRates,
    values,
    id,
  };
};

export function fetchExchangeRates(id, state) {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(receiveExchangeRates(data, state, id)))
    .catch((error) => dispatch(failureReceiveCurrencies(error)));
}
