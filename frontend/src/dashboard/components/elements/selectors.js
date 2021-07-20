import React, { useEffect } from "react";
import { getSearchSelectors, createSearchAction } from "redux-search";
import Immutable from "immutable";
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

export const dataSearchText = selectors.text;
export const filteredIdArray = selectors.result;

// export const datasearch = selectors.text;
