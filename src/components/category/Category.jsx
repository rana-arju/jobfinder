import React from "react";

const Category = ({ cat }) => {
  return (
    <div className="card card-compact bg-[#FAF8FF]  py-8">
      <figure>
        <img src={cat.icon} alt={cat.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cat.title}</h2>
        <p>{cat.des}</p>
      </div>
    </div>
  );
};

export default Category;
