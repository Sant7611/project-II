import { useState } from "react";
import { useNavigate } from "react-router-dom";
import summImg from "../../assets/mens-collection/mens-collection.jpg";
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    
    {
          _id: 2,
          name: "Air Jordan Icon",
          size:"M",
          color:"Black",
          price: 250,
          images: "https://imgnike-a.akamaihd.net/branding/home-sbf/touts/icone-air-jordan.png" ,
        },
        {
          _id: 3,
          name: "Buna Beige GT",
          size:"M",
          color:"White",
          price: 180,
          images:  "https://dochaa.com/wp-content/uploads/2025/01/Buna-Beige-GT-front-300x300.png" ,
        },
  ],
  totalPrice: 430,
};
const Checkout = () => {
  const [checkoutId, setCheckoutId] = useState(null);
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment success", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left col */}
      <div className="px-5  ">
        <form onSubmit={handleCreateCheckout}>
          <h1 className="text-lg mb-3 font-semibold">CHECKOUT</h1>

          <div className="w-full flex flex-col gap-2">
            <h3 className="">Contact Details</h3>
            <div className="flex flex-col ">
              <label className="">Email</label>
              <input
                className="py-1 px-1 text-md border border-gray-300 focus:outline-2"
                type="email"
                value="user@gmail.com"
                name="email"
              />
            </div>
            <div className="flex gap-2 mb-3 ">
              <div className="flex flex-col w-full ">
                <label>First name</label>
                <input
                  className="py-1 px-1 text-md border border-gray-300"
                  type="text"
                  name="fname"
                  value={shippingAddress.firstName}
                  onChange={(e) => {
                    setShippingAddress({
                      ...shippingAddress,
                      firstName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex flex-col w-full ">
                <label>Last name</label>
                <input
                  className="py-1 px-1 text-md border border-gray-300"
                  type="text"
                  name="lname"
                  value={shippingAddress.lastName}
                  onChange={(e) => {
                    setShippingAddress({
                      ...shippingAddress,
                      lastName: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <h3>Delivery</h3>
            <div className="flex flex-col my-2 ">
              <label>Address</label>
              <input
                className="py-1 px-1 text-md border border-gray-300"
                type="text"
                value={shippingAddress.address}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  });
                }}
                name="country"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="flex flex-col my-2  ">
                <label>City</label>
                <input
                  className="py-1 px-1 text-md border border-gray-300"
                  type="text"
                  value={shippingAddress.city}
                  onChange={(e) => {
                    setShippingAddress({
                      ...shippingAddress,
                      city: e.target.value,
                    });
                  }}
                  name="lname"
                />
              </div>
              <div className="flex flex-col my-2 ">
                <label>Postal Code</label>
                <input
                  className="py-1 px-1 text-md border border-gray-300"
                  type="text"
                  value={shippingAddress.postalCode}
                  onChange={(e) => {
                    setShippingAddress({
                      ...shippingAddress,
                      postalCode: e.target.value,
                    });
                  }}
                  name="email"
                />
              </div>
            </div>
            <div className="flex flex-col my-2 ">
              <label>Country</label>
              <input
                className="py-1 px-1 text-md border border-gray-300"
                type="text"
                value={shippingAddress.country}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  });
                }}
                name="country"
              />
            </div>
            <div className="flex flex-col my-2 ">
              <label>Phone</label>
              <input
                className="py-2 px-1 text-md border border-gray-300"
                type="number"
                value={shippingAddress.phone}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  });
                }}
                name="phone"
              />
            </div>
            <div className="mt-6">
              {!checkoutId ? (
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 my-2 rounded "
                >
                  Continue to Payment
                </button>
              ) : (
                <div>
                  <h3 className="text-lg mb-4 "> Pay with Paypal</h3>
                  <PaypalButton
                    amount={100}
                    onSuccess={handlePaymentSuccess}
                    onError={(err) => alert("Payment failed. try again")}
                  />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Right col */}
      <div className="px-5  bg-gray-50">
        <h1 className="text-lg mb-3 font-semibold">Order Summary</h1>
        <div className=" my-3  border-t  py-4 ">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b "
            >
              <div className="flex items-start">
                <img
                  src={summImg}
                  className="object-cover mr-4 w-20 h-30"
                  alt={product.name}
                />

                <div className="px-5 w-full ">
                  {console.log(product.name)}
                  <h2 className="text-lg">{product.name}</h2>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4 ">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg ">
          <p>Shippping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4 ">
          <p>Total</p>
          <p>${cart.totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;