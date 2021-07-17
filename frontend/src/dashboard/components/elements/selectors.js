import React, { useEffect } from "react";
import { getSearchSelectors, ge, createSearchAction } from "redux-search";
import { useSelector, connect } from "react-redux";
import { createSelector } from "reselect";

export const resources = (state) => state.order;

export const filterdIdlist = createSelector(
  [resources],
  (resources) => resources.orders
);

export const resourceSelector = (resourceName, state) => {
  return state.order[resourceName];
};

const selectors = getSearchSelectors({
  resourceName: "orders",
  resourceSelector: resourceSelector,
});

// export const result = selectors.result;
// export const text = selectors.text;

// export const select = createSelector(
//   [result, filterdIdlist, text],
//   (filteredIdArray, filterdIdlist, dataSearchText) => ({
//     dataSearchText,
//     filteredIdArray,
//     filterdIdlist,
//   })
// );

export const dataSearchText = selectors.text;
export const filteredIdArray = selectors.result;

// export const datasearch = selectors.text;
export const actions = {
  searchBooks: createSearchAction("orders"),
};
