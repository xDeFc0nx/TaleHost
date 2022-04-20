import { useState } from "react";

function SearchBar(props) {
  const { placeholder, data } = props;
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      props.onDataChange(data);
    } else {
      props.onDataChange(newFilter);
    }
  };
  return (
    <div className="relative text-mezo-white hover:text-mezo-dark   ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        <button className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        type="search"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
        className="py-3 text-sm text-mezo-white bg-mezo-dark rounded-full pl-14 pr-6  focus:outline-none focus:bg-mezo-white focus:text-mezo-dark"
      />
    </div>
  );
}

export default SearchBar;
