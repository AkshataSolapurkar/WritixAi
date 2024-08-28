"use client";
import React, { useState } from "react";
import SearchBar from "@/components/shared/Searchbar";
import { Dropdown } from "@/components/shared/CategoryDropdown";

const Page = () => {
  const categories = ["Technology", "Health", "Finance", "Education"];
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  const features = Array.from({ length: 6 }, (_, index) => `Feature ${index + 1}`);
  
  const filteredFeatures = features.filter(feature =>
    feature.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleCategorySelect = (category: string) => {
    console.log("Selected category:", category);
  };


  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <div className="flex-grow overflow-y-auto custom__scrollbar h-[calc(100dvh-200px)] md:h-[calc(100dvh-120px)]">
      <div className="flex flex-col md:flex-row md:gap-0 gap-2 justify-between mt-[4%]">
        <SearchBar className="text-gray-600" onSearch={handleSearch} />
        <Dropdown
          options={categories}
          onSelect={handleCategorySelect}
          placeholder="Select a category"
          dropdownWrapperClassName="bg-white z-[9999]"
        />
      </div>

      {filteredFeatures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 z-0">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-4 h-[200px] rounded-lg shadow-md flex flex-col justify-between items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-200 flex justify-center items-center">
                <div className="rounded-full w-[100%] h-[150%] bg-green-400 opacity-20 animate-pulse"></div>
                <div className="rounded-full w-[80%] h-[120%] bg-green-500 opacity-30 animate-pulse"></div>
                <div className="rounded-full w-[50%] h-[90%] bg-green-600 opacity-40 animate-pulse"></div>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-600 relative z-10">
                {feature}
              </h2>
              
              <button className="mt-4 w-full px-4 py-2 font-medium bg-white text-gray-600 rounded-md hover:bg-green-900 hover:text-white focus:outline-none relative z-10">
                Click Here
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-gray-600">No matching features found</div>
      )}
    </div>
  );
};

export default Page;
