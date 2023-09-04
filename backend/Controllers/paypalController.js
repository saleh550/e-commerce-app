const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {createOrder,captureOrder} =require('../paypal-api')


//@desc create payment order
//@route POST /my-server/create-paypal-order
//@access public
const createPaypalOrder = asyncHandler(async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const data = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(data);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
  //   console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});


//@desc capture paypal order
//@route POST /my-server/capture-paypal-order
//@access public
const capturePaypalOrder = asyncHandler(async (req, res) => {
  try {
    const { orderID } = req.body;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});

module.exports = {
  createPaypalOrder,
  capturePaypalOrder
};
