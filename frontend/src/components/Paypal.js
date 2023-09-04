import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
} from "@paypal/react-paypal-js";
const initialOptions = {
  clientId: "test",
  currency: "USD",
  intent: "capture",
};
function Paypal() {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </>
  );
}
export default Paypal;
