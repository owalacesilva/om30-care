/*
 * TownModal Actions
 */

import {
  POST_TOWN_SUCCESSED,
  POST_TOWN_FAILURE,
  POST_TOWN_LOADING,
  POST_TOWN_SUBMITTING
} from './constants';

/**
 * Submit town infos
 */
export function submitTownAction(data) {
  return { type: POST_TOWN_SUBMITTING, data };
}

/**
 * Submit town infos
 */
export function submitTownLoadingAction() {
  return { type: POST_TOWN_LOADING };
}

/**
 * Submit town infos
 */
export function submitTownSuccessedAction(town) {
  return { type: POST_TOWN_SUCCESSED, town };
}

/**
 * Submit town infos
 */
export function submitTownFailureAction(errorMessage) {
  return { type: POST_TOWN_FAILURE, errorMessage };
}