
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "../validation/SignUpSchema";
import Loading from "../components/Loading";
import { useState } from "react";
import Swal from "sweetalert2";





let SignUp = () => {

  let [loading, setLoading] = useState(false);

  let { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  let navigate = useNavigate()



  let sendData = async (data) => {

    setLoading(true);

    try {
      let response = await api.post('/users/signUp', data)

      await Swal.fire({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "Go to Login"
      });

      navigate('/')


    } catch (error) {

      Swal.fire({
        title: "Signup Failed!",
        text: error.response?.data?.errors?.[0] || error.response?.data?.message || error.message || "Something went wrong",
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
            Join Us Today
          </h1>

          <p className="mt-6 text-base md:text-lg text-blue-100 leading-7">
            Create your account and access your dashboard to manage your
            products securely and efficiently.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                ✓
              </div>
              <div>
                <h2 className="font-semibold text-lg">Easy Management</h2>
                <p className="text-blue-100 text-sm">
                  Organize your products effortlessly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                🔒
              </div>
              <div>
                <h2 className="font-semibold text-lg">JWT Security</h2>
                <p className="text-blue-100 text-sm">
                  Secure authentication for every user.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                ⚡
              </div>
              <div>
                <h2 className="font-semibold text-lg">Fast Access</h2>
                <p className="text-blue-100 text-sm">
                  Enjoy a smooth and responsive experience.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Fill in the details below to create your account.
          </p>

          <form onSubmit={handleSubmit(sendData)} className="space-y-5">

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register("name")}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                {...register("confirmPassword")}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              {loading ? "Signing..." : "Create Account"}
            </button>

            <p className="text-center text-gray-600">
              Already have an account?
              <Link to={"/login"} className="ml-2 text-blue-600 hover:text-blue-700 cursor-pointer font-semibold">
                Login
              </Link>
            </p>

          </form>

        </div>

      </div>
    </div>
  );

}

export default SignUp