import React, { useState } from "react";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/200/300?random=1",
      },
      {
        url: "https://picsum.photos/200/300?random=4",
      },
    ],
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();console.log(productData)
  }

  return (
    <div className="max-w-5xl mxauto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bld mb-6 ">Edit Product</h2>
      <form onSubmit={handleSubmit} >
        {/* name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* description*/}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">Description</label>
          <textarea
            name="description"
            value={productData.description}
            className="w-full border-gray-300 border rounded-md p-2"
            rows={4}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">Price</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={productData.price}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Count in stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            onChange={handleChange}
            value={productData.countInStock}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">SKU</label>
          <input
            type="text"
            name="sku"
            onChange={handleChange}
            value={productData.sku}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="size"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 ">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Image upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2  ">Upload Image</label>
          <input type="file" onChange={handleImage} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "product image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md "
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
