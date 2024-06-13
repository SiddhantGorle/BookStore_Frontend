import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../const";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${BASE_URL}/user/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="dark:bg-gradient-to-r from-neutral to-transparent min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="modal-box w-full dark:bg-zinc-700 dark:text-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center">Signup</h3>
            <div className="mt-4 space-y-2">
              <label className="block">
                <span className="block text-sm font-medium">Name</span>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-2 border rounded-md outline-none text-black"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <div className="mt-4 space-y-2">
              <label className="block">
                <span className="block text-sm font-medium">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md outline-none text-black"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <div className="mt-4 space-y-2">
              <label className="block">
                <span className="block text-sm font-medium">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md outline-none text-black"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col items-center mt-6 space-y-4">
              <button
                type="submit"
                className="w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
              <p className="text-center">
                Have an account?{" "}
                <span
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </span>
              </p>
              <Login />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
