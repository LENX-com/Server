import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePayment } from "../actions/cartActions";
import "../App.scss";

export default function Payment(props) {
  const dispatch = useDispatch();
  const [form, setFormValue] = useState({
    card: null,
    cardNumber: "",
    firstName: "",
    email: "",
    paypal: null,
  });
  const handleFormChange = (e) => {
    setFormValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const formdata = {
      card: true,
      cardNumber: form.cardNumber,
      firstName: form.firstName,
      email: form.email,
    };
    dispatch(savePayment(formdata));
    props.history.push("placeorder");
  };
  const handlePaypal = (e) => {
    e.preventDefault();
    const formdata = {
      paypal: true,
    };
    dispatch(savePayment(formdata));
    props.history.push("placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className="bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
                  <div className="md:flex ">
                    <div className="w-full p-4 px-5 py-5">
                      <div className="flex flex-row">
                        <h2 className="text-3xl font-semibold">Lenx</h2>
                      </div>
                      <span>Payments Method</span>
                      <div className="grid">
                        <input
                          type="text"
                          name="firstName"
                          onChange={(e) => handleFormChange(e)}
                          value={form.firstName}
                          className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                          placeholder="First name"
                        />{" "}
                        <input
                          type="text"
                          name="cardNumber"
                          value={form.cardNumber}
                          onChange={(e) => handleFormChange(e)}
                          className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                          placeholder="Card Number*"
                        />{" "}
                        <input
                          type="text"
                          name="email"
                          value={form.email}
                          onChange={(e) => handleFormChange(e)}
                          className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                          placeholder="Email*"
                        />
                        <div className="flex justify-between items-center pt-2">
                          <button
                            type="button"
                            className="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white"
                            onClick={handleSubmit}
                          >
                            Continue to place order
                          </button>{" "}
                        </div>
                        
                          <div className="my-4">
                            <label
                              htmlFor="paypal"
                              id="paypal"
                              onClick={handlePaypal}
                            >
                              Pay with Paypal
                            </label>
                            e
                            <input
                              name="paypal"
                              onChange={(e) => handleFormChange(e)}
                              value={form.paypal}
                              className="border rounded focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                              type="radio"
                              id="paypal"
                            />
                          </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
