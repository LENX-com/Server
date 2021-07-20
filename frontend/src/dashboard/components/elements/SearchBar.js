import React, { useEffect, useRef } from "react";
import { createSearchAction } from "redux-search";
import { createSelector } from "reselect";
import { filterdIdlist, filteredIdArray, dataSearchText } from "./selectors";
import { List } from "react-virtualized";
import { connect } from "react-redux";

const SearchBar = ({
  searchBooks,
  filterdIdlist,
  filteredIdArray,
  dataSearchText,
}) => {
  const handleChange = (value) => {
    searchBooks(value);
  };
  const valueRef = useRef("");
  const list = ["braind vgau"];
  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) {
    const contact = filterdIdlist.filter((id) =>
      valueRef.current.value === ""
        ? filterdIdlist
        : filteredIdArray.includes(id.id)
    );
    return (
      <div key={key} style={style}>
        {contact.length > 0
          ? contact.map((item) => <span>{item.name}</span>)
          : "no result"}
      </div>
    );
  }

  return (
    <>
      <div className="pt-2 relative mb-6 text-gray-600  w-64">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          // onChange={(e) => handleChange(e)}
          onChange={() => handleChange(valueRef.current.value)}
          ref={valueRef}
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
        <List
          width={300}
          height={300}
          rowCount={list.length}
          rowHeight={20}
          rowRenderer={rowRenderer}
        />
        ,
      </div>
    </>
  );
};
const actions = {
  searchBooks: createSearchAction("orders"),
};

const selectors = createSelector(
  [dataSearchText, filteredIdArray, filterdIdlist],
  (dataSearchText, filteredIdArray, filterdIdlist) => ({
    dataSearchText,
    filteredIdArray,
    filterdIdlist,
  })
);
export default connect(selectors, actions)(SearchBar);
