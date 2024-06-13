import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BASE_URL } from "../const";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }
    if (!form.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/contact`, form);
        console.log("Server response:", response.data);
        toast.success("Thanks for your response, We will get back to you");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } catch (error) {
        console.error("There was an error submitting the form!", error);
      }
    }
  };

  const handleClose = () => {
    navigate("/"); // Redirect to home page when close button is clicked
  };

  return (
    <div className="dark:bg-gradient-to-r from-neutral to-transparent">
      <Navbar />
      <div className="min-w-fit min-h-fi mt-16 mb-20 mr-4 ml-4 pt-36 pb-36">
        <div className="relative max-w-md m-auto p-10 shadow-lg rounded-lg dark:bg-zinc-700">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-600 dark:text-white hover:text-gray-800 focus:outline-none"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border text-black ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border text-black ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email Id"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`mt-1 block w-full px-3 py-2 border text-black ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
