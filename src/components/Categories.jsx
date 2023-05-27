import React, { useState } from "react";
import Category from "./Category";

const Categories = ({ categoryData, selected, setSelected }) => {
  return (
    <div className="categories_container">
      <p>Categories</p>
      <div className="grid-container">
        {categoryData.map((item) => {
          return (
            <Category
              item={item}
              key={item.id}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
