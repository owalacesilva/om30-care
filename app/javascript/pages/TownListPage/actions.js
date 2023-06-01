/*
 * TownListPage Actions
 */

import {
  GET_TOWN_LIST_SUCCESSED,
  GET_TOWN_LIST_FAILURE,
  GET_TOWN_LIST_LOADING,
  GET_TOWN_LIST_SUBMITTING,
} from './constants';

/**
 * Get town list
 */
export function getTownListAction() {
  return { type: GET_TOWN_LIST_SUBMITTING };
}

/**
 * Get town list
 */
export function getTownListLoadingAction() {
  return { type: GET_TOWN_LIST_LOADING };
}

/**
 * Get town list
 */
export function getTownListSuccessedAction({ count, rows }) {
  return { type: GET_TOWN_LIST_SUCCESSED, townList: rows };
}

/**
 * Get town list
 */
export function getTownListFailureAction(errorMessage) {
  return { type: GET_TOWN_LIST_FAILURE, errorMessage };
}