import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesList = ({ categories }) => {

  return (
    <div className="p-3">
      <div className="grid grid-cols-1 gap-3 my-4">
        {categories
          ? categories.map((data) => (
              <NavLink>
                <div className=" bg-white rounded p-2 shadow-button relative">
                  <div className="flex ml-2 justify-between hover:bg-Hover">
                    <div>
                      <div className="my-auto">
                        <div className="absolute top-2 left-2 text-base lg:text-2xl">
                          {data.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))
          : "no categories"}
      </div>
    </div>
  );
};

export default CategoriesList;
