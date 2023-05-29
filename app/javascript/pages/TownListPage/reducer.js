/*
 *
 * TownListPage reducer
 *
 */

import produce from 'immer';
import {
  GET_TOWN_LIST,
  GET_TOWN_LIST_LOADING,
  GET_TOWN_LIST_SUCCESS,
  GET_TOWN_LIST_ERROR
} from './constants';
import { useDispatch } from 'react-redux';
import { updateTownList } from './actions';

export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  townList: [{
    display_name: 'Test',
    description: 'Test',
    url: 'Test',
    state: 'Test',
    country: 'Test'
  },{
    display_name: 'Test',
    description: 'Test',
    url: 'Test',
    state: 'Test',
    country: 'Test'
  },{
    display_name: 'Test',
    description: 'Test',
    url: 'Test',
    state: 'Test',
    country: 'Test'
  },{
    display_name: 'Test',
    description: 'Test',
    url: 'Test',
    state: 'Test',
    country: 'Test'
  },{
    display_name: 'Test',
    description: 'Test',
    url: 'Test',
    state: 'Test',
    country: 'Test'
  }],
};

/* eslint-disable default-case, no-param-reassign */
const townListPageReducer = (state = initialState, action) =>
  produce(state, draft => {

    switch (action.type) {
      case GET_TOWN_LIST_LOADING:
        draft.loading = true;
        draft.error = false;
        // draft.townList = [];
        break;

      case GET_TOWN_LIST_SUCCESS:
        draft.loading = false;
        // draft.townList = action.townList;
        break;

      case GET_TOWN_LIST_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default townListPageReducer;