import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShipping } from "../actions/cartActions";
import "../App.scss";

export default function Shipping(props) {
  const dispatch = useDispatch();
  const [form, setFormValue] = useState({
    firstname: "",
    lastname: "",
    company: "",
    apartment: "",
    country: "",
    address: "",
    phone: "",
    postal: "",
  });
  const handleFormChange = (e) => {
    setFormValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleShipSubmit = () => {
      const formdata = {
          firstname:form.firstname,
          lastname:form.lastname,
          company:form.company,
          apartment:form.apartment,
          address:form.address,
          phone:form.phone,
          postal:form.postal
      }
      dispatch(saveShipping(formdata))
    props.history.push("payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <div className="bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="flex flex-row">
                  <h2 className="text-3xl font-semibold">Lenx</h2>
                </div>
                <span>Shipping Address</span>
                <div className="grid md:grid-cols-2 md:gap-2">
                  {" "}
                  <input
                    type="text"
                    value={form.firstname}
                    onChange={(e) => handleFormChange(e)}
                    name="firstname"
                    class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="First name*"
                  />{" "}
                  <input
                    type="text"
                    name="lastname"
                    value={form.lastname}
                    onChange={(e) => handleFormChange(e)}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Last name*"
                  />{" "}
                </div>{" "}
                <input
                  type="text"
                  name="company"
                  onChange={(e) => handleFormChange(e)}
                  value={form.company}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Company (optional)"
                />{" "}
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={(e) => handleFormChange(e)}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Address*"
                />{" "}
                <input
                  type="text"
                  name="postal"
                  onChange={(e) => handleFormChange(e)}
                  value={form.postal}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Postal Code*"
                />{" "}
                <input
                  type="text"
                  name="apartment"
                  value={form.apartment}
                  onChange={(e) => handleFormChange(e)}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={(e) => handleFormChange(e)}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Country*"
                />{" "}
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => handleFormChange(e)}
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
                    onClick={handleShipSubmit}
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
