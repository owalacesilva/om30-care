/*
 *
 * TownModal reducer
 *
 */

import {
  POST_TOWN_SUCCESSED,
  POST_TOWN_FAILURE,
  POST_TOWN_LOADING,
  POST_TOWN_SUBMITTING
} from './constants';

export const initialState = {
  isLoading: false,
  errorMessage: '',
  townData: {},
};

/* eslint-disable default-case, no-param-reassign */
const townModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TOWN_SUBMITTING:
      return { 
        ...state,
        isLoading: false,
      }
    case POST_TOWN_LOADING:
      return { 
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case POST_TOWN_SUCCESSED:
      return { 
        ...state,
        isLoading: false,
        errorMessage: '',
        townData: { ...state.townData },
      }
    case POST_TOWN_FAILURE:
      return { 
        ...state,
        isLoading: false,
        errorMessage: state.errorMessage,
      }
    default:
      return state;
  }
};

export default townModalReducer;