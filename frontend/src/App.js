import React from "react";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    clientId: process.env.REACT_APP_CLIENTID_PAYPAL,
    currency: "USD",
    intent: "capture",
  };
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
