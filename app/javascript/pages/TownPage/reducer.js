/*
 *
 * TownListPage reducer
 *
 */
import {
  GET_TOWN_SUCCESSED,
  GET_TOWN_FAILURE,
  GET_TOWN_LOADING,
  GET_TOWN_SUBMITTING,
} from './constants';

export const initialState = {
  isLoading: false,
  errorMessage: '',
  slug: null,
  townData: null,
};

const townPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOWN_SUBMITTING:
      return { 
        ...state,
        slug: action.slug, 
        isLoading: false,
      }
    case GET_TOWN_LOADING:
      return { 
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    case GET_TOWN_SUCCESSED:
      return { 
        ...state,
        isLoading: false,
        errorMessage: '',
        townData: action.townData,
      }
    case GET_TOWN_FAILURE:
      return { 
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state;
  }
};

export default townPageReducer;