import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduxSearch, SearchApi, INDEX_MODES } from 'redux-search'


import thunk from "redux-thunk";
import rootReducer from "./reducers";
import setAuthToken from "./utils/setAuthToken";

const initialState = {};

const middleware = [thunk];
// all-substrings match by default; same as current
// eg "c", "ca", "a", "at", "cat" match "cat"
const allSubstringsSearchApi = new SearchApi()

// prefix matching (eg "c", "ca", "cat" match "cat")
const prefixSearchApi = new SearchApi({
  indexMode: INDEX_MODES.PREFIXES
})

// exact words matching (eg only "cat" matches "cat")
const exactWordsSearchApi = new SearchApi({
  indexMode: INDEX_MODES.EXACT_WORDS
})

const enhancer = composeWithDevTools(
  reduxSearch({
    resourceIndexes: {
      orders: ["name", "address"]
    },
    resourceSelector: (resourceName, state) => {
      return state.order[resourceName];
    },
    searchApi: prefixSearchApi
  }),
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, initialState, enhancer);

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
