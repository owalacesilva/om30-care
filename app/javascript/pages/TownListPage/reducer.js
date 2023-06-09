/*
 *
 * TownListPage reducer
 *
 */
import {
  GET_TOWN_LIST_SUCCESSED,
  GET_TOWN_LIST_FAILURE,
  GET_TOWN_LIST_LOADING,
  GET_TOWN_LIST_SUBMITTING,
} from './constants';

export const initialState = {
  isLoading: false,
  errorMessage: '',
  townList: [],
};

/* eslint-disable default-case, no-param-reassign */
const townListPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOWN_LIST_SUBMITTING:
      return { 
        ...state,
        isLoading: false,
      }
    case GET_TOWN_LIST_LOADING:
      return { 
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case GET_TOWN_LIST_SUCCESSED:
      return { 
        ...state,
        isLoading: false,
        errorMessage: '',
        townList: action.townList,
      }
    case GET_TOWN_LIST_FAILURE:
      return { 
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state;
  }
};

export default townListPageReducer;