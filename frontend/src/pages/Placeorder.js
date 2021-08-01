import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";

export default function Placeorder() {
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="flex flex-row">
                  <h2 className="text-3xl font-semibold">Lenx</h2>
                </div>
                <span>Review Order</span>
                <div className="grid md:grid-cols-2 md:gap-2">
                  {" "}
                  <input
                    type="text"
                    name="firstname"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="First name*"
                  />{" "}
                  <input
                    type="text"
                    name="lastname"
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Last name*"
                  />{" "}
                </div>{" "}
                <input
                  type="text"
                  name="company"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Company (optional)"
                />{" "}
                <input
                  type="text"
                  name="country"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Country*"
                />{" "}
                <input
                  type="text"
                  name="phone"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Phone Number*"
                />
                <div className="flex justify-between items-center pt-2">
                  {" "}
                  <button
                    type="button"
                    class="h-12 w-24 text-blue-500 text-xs font-medium"
                  >
                    Return to cart
                  </button>{" "}
                  <button
                    type="button"
                    className="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white"
                  >
                    Continue to Shipping
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
