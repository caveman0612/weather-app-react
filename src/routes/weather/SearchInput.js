import React from "react";

const SearchInput = ({
  name,
  value,
  changeHandler,
  placeHolder,
  visbility = "",
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name + "Input"} className="form-label d-none"></label>
      <input
        className={`form-control ${visbility}`}
        id={name + "Input"}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchInput;
