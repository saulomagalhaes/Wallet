import { RECEIVE_CURRENCIES, FAILURE_RECEIVE_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [0],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state, currencies: [...action.currencies],
    };
  case FAILURE_RECEIVE_CURRENCIES:
    return {
      ...state, error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
