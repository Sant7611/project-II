import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filter, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = [
    "Sneaker & Sporty Shoes",
    "Casual Shoes",
    "Formals",
    "Flip Flop & Slippers",
    "Sandals",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow"];
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Skechers",
    "Converse",
    "Vans",
    "Under Armour",
    "Asics",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filter };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]; // Add the value to the array
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value); // Remove the value from the array
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters)
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`) // ?category=Bottom+Wear&size=XS%2CS . //here %2C is the new coded of ,
  };

  const handlePriceChange = (e) =>{
    const newPrice = e.target.value;
    setPriceRange([0, newPrice])
    const newFilters = {...filter, minPrice:0, maxPrice: newPrice};
    setFilters(filter);
    updateURLParams(newFilters);
  }

  
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4 ">Filter</h3>

      {/* Category filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2 ">
          Category
        </label>
        {categories.map((category) => (
          <div className="flex items-center mb-1 " key={category}>
            <input
              value={category}
              onChange={handleFilterChange}
              type="radio"
              checked={filter.category === category}
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-x-gray-300"
            />
            <span className="textgray700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2 ">Gender</label>
        {genders.map((gender) => (
          <div className="flex items-center mb-1 " key={gender}>
            <input
              value={gender}
              onChange={handleFilterChange}
              type="radio"
              name="gender"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-x-gray-300"
            />
            <span className="textgray700">{gender}</span>
          </div>
        ))}
      </div>

      {/* COlor FIlter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2 ">
          {colors.map((color) => (
            <button
              key={color}
              value={color}
              name="color"
              onClick={handleFilterChange}
              className={`${filter.color === color ? "ring-2 ring-blue-500" : "" } w-8 h-8 rounded-full border border-x-gray-300 cursor-pointer transition hover:scale-105`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div className="flex items-center mb-1" key={size}>
            <input
              value={size}
              onChange={handleFilterChange}
              type="checkbox"
              name="size"
              checked={filter.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div className="flex items-center mb-1" key={brand}>
            <input
              value={brand}
              onChange={handleFilterChange}
              type="checkbox"
              name="brand"
              checked={filter.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range filter */}
      <div className="mb-">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          value={priceRange[1]}
          onChange ={handlePriceChange}
          max={100}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
        />
        <div className="flex justify-between text-gray-600 mt-2 ">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
