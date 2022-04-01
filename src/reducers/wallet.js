import {
  RECEIVE_CURRENCIES,
  FAILURE_RECEIVE_CURRENCIES,
  RECEIVE_EXCHANGE_RATES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: [...action.currencies],
    };
  case FAILURE_RECEIVE_CURRENCIES:
    return {
      ...state,
      error: action.error,
    };
  case RECEIVE_EXCHANGE_RATES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: action.id,
          ...action.values,
          exchangeRates: action.exchangeRates,
        },
      ],
    };
  default:
    return state;
  }
};

export default wallet;
