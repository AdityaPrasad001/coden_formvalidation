import React from "react";

const Category = ({ item, selected, setSelected }) => {
  return (
    <div
      className={`item ${selected === item.id ? "selected" : ""}`}
      onClick={() => setSelected(item.id)}
    >
      {item.title}
    </div>
  );
};

export default Category;
