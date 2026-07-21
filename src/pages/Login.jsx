import { yupResolver } from "@hookform/resolvers/yup";
import api from "../api/axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../validation/LoginSchema";
import Loading from "../components/Loading";
import { useState } from "react";
import Swal from "sweetalert2";





let Login = () => {

  let [loading, setLoading] = useState(false);

  let { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(loginSchema)
  })

  let navigate = useNavigate()


  let sendData = async (data) => {

    setLoading(true);


    try {
      let response = await api.post('/users/login', data)

      localStorage.setItem('token', response.data.token)

      navigate('/')

      await Swal.fire({

        title: "Login Successful!",
        text: response.data.message,
        icon: "success",
        timer: 1500,
        showConfirmButton: false

      });

    } catch (error) {

      Swal.fire({

        title: "Login Failed!",
        text: error.response?.data?.errors?.[0] || error.response?.data?.message || error.message || "Invalid email or password",
        icon: "error",
        confirmButtonText: "Try Again"

      });

    } finally {

      setLoading(false);

    }

  }
  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-10 lg:p-12">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-base md:text-lg text-blue-100 leading-7">
            Login to access your dashboard and manage your products securely.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                ✓
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  Product Management
                </h2>

                <p className="text-blue-100 text-sm">
                  Manage all your products in one place.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                🔒
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  Secure Login
                </h2>

                <p className="text-blue-100 text-sm">
                  Protected using JWT authentication.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                ⚡
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  Fast Performance
                </h2>

                <p className="text-blue-100 text-sm">
                  Simple, responsive and easy to use.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex items-center">

          <form
            onSubmit={handleSubmit(sendData)}
            className="w-full"
          >

            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Login
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Welcome back! Please login to continue.
            </p>

            <div className="mb-5">
              <label className="block mb-2 font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <div className="mb-3">
              <label className="block mb-2 font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <div className="flex justify-end mb-6">
              <Link
                to="/forget-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >

              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>

          </form>

        </div>

      </div>
    </div>

  )
}

export default Login