import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface InputProps {
  handleSearch: () => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ handleSearch, setLocation }: InputProps) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <form className="flex items-center w-full justify-center relative">
      <div className="relative w-2/4">
        <input
          type="text"
          className="w-full p-1 pl-8 outline-none text-black rounded-lg"
          placeholder="Enter city name here..."
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div
          className="absolute right-2 top-1/4 text-black cursor-pointer" onClick={handleSearch}
        >
          <SearchIcon />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
