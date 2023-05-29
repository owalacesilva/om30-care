/*
 * TownListPage Actions
 */

import { GET_TOWN_LIST, GET_TOWN_LIST_SUCCESS } from './constants';

/**
 * Get town list
 *
 * @return {array} An array of towns
 */
export function getTownList() {
  return { type: GET_TOWN_LIST };
}

/**
 * Get town list
 *
 * @return {array} An array of towns
 */
export function updateTownList(townList) {
  return { type: GET_TOWN_LIST_SUCCESS, townList: townList };
}