
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import createProductSchema from "../validation/CreateProductSchema";
import { useState } from "react";
import Swal from "sweetalert2";




let CreateProduct = () => {

    let [loading, setLoading] = useState(false)


    let { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(createProductSchema)
    })


    let navigate = useNavigate()






    let sendData = async (formDataValue) => {

        setLoading(true);


        let token = localStorage.getItem('token');

        let formData = new FormData();

        formData.append("image", formDataValue.image[0])
        formData.append("productName", formDataValue.productName)
        formData.append("category", formDataValue.category)
        formData.append("price", formDataValue.price)
        formData.append("brand", formDataValue.brand)
        formData.append("stock", formDataValue.stock)
        formData.append("discount", formDataValue.discount)
        formData.append("isNewArrival", formDataValue.isNewArrival)

        try {

            let response = await api.post('/products/', formData, {

                headers: {

                    Authorization: `Bearer ${token}`,

                    "Content-Type": "multipart/form-data"
                }

            })




            Swal.fire({

                title: "Success!",
                text: response.data.message,
                icon: "success",
                confirmButtonText: "OK"
            });



            navigate('/products');


        } catch (error) {



            Swal.fire({
                
                title: "Error!",
                text: error.response?.data?.errors?.join("\n") || error.message,
                icon: "error",
                confirmButtonText: "OK"
            });


        } finally {

            setLoading(false);
        }


    }


    return (

        <>

            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 py-10 px-5">

                {/* Back Button */}
                <Link to="/products">
                    <button className="mb-8 bg-slate-800 hover:bg-slate-900 text-white px-5 py-2 rounded-lg transition">
                        ← Back
                    </button>
                </Link>

                {/* Form Card */}
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
                        Create Product
                    </h1>

                    <p className="text-center text-gray-500 mb-8">
                        Fill in the product information below.
                    </p>

                    <form onSubmit={handleSubmit(sendData)} className="space-y-6">

                        {/* Product Name */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-2">
                                Product Name
                            </label>

                            <input
                                name="productName"
                                type="text"
                                placeholder="Enter product name"
                                {...register("productName")}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <p className="text-red-500">{errors.productName?.message}</p>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-2">
                                Category
                            </label>

                            <input
                                name="category"
                                type="text"
                                placeholder="Enter category"
                                {...register("category")}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <p className="text-red-500">{errors.category?.message}</p>
                        </div>

                        {/* Price & Brand */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Price
                                </label>

                                <input
                                    name="price"
                                    type="number"
                                    placeholder="Enter price"
                                    {...register("price")}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <p className="text-red-500">{errors.price?.message}</p>
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Brand
                                </label>

                                <input
                                    name="brand"
                                    type="text"
                                    placeholder="Enter brand"
                                    {...register("brand")}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <p className="text-red-500">{errors.brand?.message}</p>
                            </div>

                        </div>

                        {/* Stock & Discount */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Stock
                                </label>

                                <input
                                    name="stock"
                                    type="number"
                                    placeholder="Enter stock"
                                    {...register("stock")}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <p className="text-red-500">{errors.stock?.message}</p>
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Discount (%)
                                </label>

                                <input
                                    name="discount"
                                    type="number"
                                    placeholder="Enter discount"
                                    {...register("discount")}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <p className="text-red-500">{errors.discount?.message}</p>
                            </div>

                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-2">
                                Image URL
                            </label>

                            <input
                                name="image"
                                type="file"
                                placeholder="https://example.com/image.jpg"
                                {...register("image")}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <p className="text-red-500">{errors.image?.message}</p>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">

                            <input
                                name="isNewArrival"
                                type="checkbox"
                                {...register("isNewArrival")}
                                className="w-5 h-5 accent-blue-600"
                            />

                            <label className="font-medium text-gray-700">
                                Mark as New Arrival
                            </label>

                        </div>

                        {/* Submit Button */}
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            {loading ? "Creating..." : "Create Product"}
                        </button>

                    </form>

                </div>

            </div>

        </>
    )

}

export default CreateProduct