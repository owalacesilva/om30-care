import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import history from "util/history";
import townListPageReducer from "./pages/TownListPage/reducer";

export default function createReducers(injectedReducers = {}) {

  const rootReducer = combineReducers({
    townListPageReducer: townListPageReducer,
    // router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
};
