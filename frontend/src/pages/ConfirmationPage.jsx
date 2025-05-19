const checkout = {
  _id: "123",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Boots",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=15",
    },
    {
      productId: "",
      name: "Boots",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=18",
    },
  ],
  shippingAddress:{
    address: "tokha",
    city:"ktm",
    country:"Nepal"
  }
};
const ConfirmationPage = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); //add 10 days
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8 ">
        Thank You for you Order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border ">
          <div className="flex justify-between mb-20 ">
            {/* order id and date */}
            <div>
              <h2 className="text-xl font-semibold ">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {checkout.createdAt.toLocaleDateString()}
              </p>
            </div>
            {/* Estimated delivery */}
            <div>
              <p className="text-emerald-70 text-sm ">
                Estimated Delivery :{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="text-md font-semibold ">
                  {item.name}

                  <p className="text-sm text-gray-500 ">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty:{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-2 gap-8 ">
            {/* Payment info */}
            <div>
            <h4 className="text-lg font-semibold mb-2 ">
                Payment
            </h4>
                   <p className="text-gray-600">Paypal</p>
            </div>
          {/* Delivery info */}
          <div>
            <h4 className="text-lg font-semibold mb-2 ">
                Delivery
            </h4>
            <p className="text-gray-600">{checkout.shippingAddress.address}</p>
            <p className="text-gray-600">{checkout.shippingAddress.city}, {" "} {checkout.shippingAddress.country}</p>
          </div>
          </div>


        </div>
      )}
    </div>
  );
};

export default ConfirmationPage;
