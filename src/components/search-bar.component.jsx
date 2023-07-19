import React from "react";

const SearchBar = ({handleChange, searchField}) => {
  return (
    <div className="relative z-0">
      <input type="text" onChange={handleChange} value={searchField} className="w-96 h-[56px] border border-[#E0E0E0] rounded-lg bg-white font-quicksand font-medium text-sm text-[#898989] pl-3" placeholder="Search Articles"/>
      <svg
      className="w-6 absolute right-5 top-4 bg-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        ></path>
      </svg>
    </div>
  );
};

export default SearchBar;
