import React from "react";
import { Input } from "../ui/input";
import { Search } from 'lucide-react';

interface SearchBarProps {
  className?: string;
  onSearch?: (query: string) => void; // Add this prop
}

const SearchBar = ({ className, onSearch }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <Input
      placeholder="Search Product"
      icon1={<Search className="text-gray-500" />}
      className={className || "border-none text-black focus-visible:ring-0"}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
