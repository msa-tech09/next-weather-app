"use client";
import React from 'react';

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className="flex items-center w-full justify-center">
      <input
        type="text"
        className="w-2/4 p-1 outline-none text-black rounded-lg"
        placeholder="Enter city name here..."
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
