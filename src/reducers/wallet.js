import {
  RECEIVE_CURRENCIES,
  FAILURE_RECEIVE_CURRENCIES,
  RECEIVE_EXCHANGE_RATES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  RECEIVE_EDIT_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  editExpense: {},
  edit: false,
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
      edit: false,
    };
  case DELETE_EXPENSE:
    return {
      currencies: [...state.currencies],
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editExpense: action.editExpense,
      edit: action.edit,
    };
  case RECEIVE_EDIT_EXPENSE:
  {
    const expenses = [...state.expenses];
    const expenseModify = expenses.filter((exp) => exp.id !== action.editExpense.id);
    return {
      ...state,
      expenses: [...expenseModify, action.editExpense].sort((a, b) => a.id - b.id),
      edit: action.edit,
    };
  }
  default:
    return state;
  }
};

export default wallet;
