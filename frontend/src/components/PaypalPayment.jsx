import { PayPalButtons,PayPalButton } from "@paypal/react-paypal-js";
function PaypalPayment() {
    const URL="http://localhost:5000"
  const createOrder = async(data) => {
    
    console.log('createOrder',data)
    // Order is created on the server and the order id is returned
    return await fetch(`${URL}/api/paypal/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        product:{
            description:"e-commerce app",
            cost:"10.00"
        }
      }),
    })
      .then((response) => 
        // console.log("res:",response)
        response.json())
      .then((order) => order.id);
  };
  const onApprove = async(data) => {
    console.log('Approve',data)

    // Order is captured on the server and the response is returned to the browser
    return fetch(`${URL}/api/paypal/my-server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then((response) => {
        console.log("payment Success",response.json())
        response.json()});
  };
  return (
    <>
      {/* <PayPalButtons /> */}
      <PayPalButtons
        createOrder={(data,actions) => createOrder(data, actions)}
        onApprove={(data,actions) => onApprove(data, actions)}
      />
    </>
  );
}
export default PaypalPayment;
