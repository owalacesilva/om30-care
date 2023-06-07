/*
 * TownPage Actions
 */

import {
  GET_TOWN_SUCCESSED,
  GET_TOWN_FAILURE,
  GET_TOWN_LOADING,
  GET_TOWN_SUBMITTING,
} from './constants';

/**
 * Get town list
 */
export function getTownAction(slug) {
  return { type: GET_TOWN_SUBMITTING, slug };
}

/**
 * Get town list
 */
export function getTownLoadingAction() {
  return { type: GET_TOWN_LOADING };
}

/**
 * Get town list
 */
export function getTownSuccessedAction(townData) {
  return { type: GET_TOWN_SUCCESSED, townData: townData };
}

/**
 * Get town list
 */
export function getTownFailureAction(errorMessage) {
  return { type: GET_TOWN_FAILURE, errorMessage };
}