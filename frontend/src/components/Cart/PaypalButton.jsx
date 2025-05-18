import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, onError }) => {
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AUwS8Day8Jk67eQBFjCE-WH8s7ccgo08iFVokQrPH5fdu0T3AqA1t8f-favJWmoN-FJIaJEJaP8o02Qx",
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: amount } }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(onSuccess);
          }}
          onError={onError}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PaypalButton;