import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/axios"




let CreateProduct = () => {


    let [data, setData] = useState({

        image: "",
        productName: "",
        category: "",
        price: "",
        brand: "",
        stock: "",
        discount: "",
        isNewArrival: false,
    })

    let navigate = useNavigate()


    let getValue = (e) => {


        let { name, value, checked, type, files } = e.target

        setData({

            ...data,
            [name]: type === 'checkbox' ? checked : type === "file" ? files[0] : value
        })

    }

    let sendData = async (e) => {

        e.preventDefault();

        let token = localStorage.getItem('token');

        let formData = new FormData();

        formData.append("image", data.image)
        formData.append("productName", data.productName)
        formData.append("category", data.category)
        formData.append("price", data.price)
        formData.append("brand", data.brand)
        formData.append("stock", data.stock)
        formData.append("discount", data.discount)
        formData.append("isNewArrival", data.isNewArrival)

        try {

            let response = await api.post('/products/', formData, {

                headers: {

                    Authorization: `Bearer ${token}`,

                    "Content-Type": "multipart/form-data"
                }

            })

            alert(response.data.message);



            navigate('/products');


        } catch (error) {

            alert(error.response?.data?.errors?.join("\n") || error.message);




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

                    <form onSubmit={sendData} className="space-y-6">

                        {/* Product Name */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-2">
                                Product Name
                            </label>

                            <input
                                name="productName"
                                type="text"
                                placeholder="Enter product name"
                                value={data.productName}
                                onChange={getValue}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
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
                                value={data.category}
                                onChange={getValue}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
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
                                    value={data.price}
                                    onChange={getValue}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Brand
                                </label>

                                <input
                                    name="brand"
                                    type="text"
                                    placeholder="Enter brand"
                                    value={data.brand}
                                    onChange={getValue}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
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
                                    value={data.stock}
                                    onChange={getValue}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Discount (%)
                                </label>

                                <input
                                    name="discount"
                                    type="number"
                                    placeholder="Enter discount"
                                    value={data.discount}
                                    onChange={getValue}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
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
                                onChange={getValue}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">

                            <input
                                name="isNewArrival"
                                type="checkbox"
                                checked={data.isNewArrival}
                                onChange={getValue}
                                className="w-5 h-5 accent-blue-600"
                            />

                            <label className="font-medium text-gray-700">
                                Mark as New Arrival
                            </label>

                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            Create Product
                        </button>

                    </form>

                </div>

            </div>

        </>
    )
}

export default CreateProduct