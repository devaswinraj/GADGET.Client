import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import api from "../api/axios"



let UpdateProduct = () => {

    let navigate = useNavigate();


    let { id } = useParams()

    let [formData, setFormData] = useState({

        image: "",
        productName: "",
        category: "",
        price: "",
        brand: "",
        stock: "",
        discount: "",
        isNewArrival: false,
    })

    useEffect(() => {

        let getProduct = async () => {

            let token = localStorage.getItem('token')

            try {

                let response = await api.get(`/products/${id}`, {

                    headers: {

                        Authorization: `Bearer ${token}`
                    }
                })

                setFormData(response.data.data);



            } catch (error) {

                console.log(error.response);

            }

        }

        getProduct();

    }, [id])


    let getValue = (e) => {

        let { name, type, value, checked } = e.target

        setFormData({

            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })

    }

    let sendData = async (e) => {

        e.preventDefault();

        let token = localStorage.getItem('token')

        try {

            let response = await api.put(`/products/${id}`, formData, {

                headers: {

                    Authorization: `Bearer ${token}`
                }
            })

            alert(response.data.message)

            navigate('/products')


        } catch (error) {

            alert(error.response?.data?.errors?.join("\n") || error.message)


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

                {/* Update Card */}
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Update Product
                    </h1>

                    <p className="text-center text-gray-500 mt-2 mb-8">
                        Edit the product details and save your changes.
                    </p>

                    <form onSubmit={sendData} className="space-y-6">

                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product Name
                            </label>

                            <input
                                name="productName"
                                type="text"
                                placeholder="Enter Product Name"
                                value={formData.productName}
                                onChange={getValue}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Category
                            </label>

                            <input
                                name="category"
                                type="text"
                                placeholder="Enter Category"
                                value={formData.category}
                                onChange={getValue}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Price & Brand */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Price
                                </label>

                                <input
                                    name="price"
                                    type="number"
                                    placeholder="Enter Price"
                                    value={formData.price}
                                    onChange={getValue}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Brand
                                </label>

                                <input
                                    name="brand"
                                    type="text"
                                    placeholder="Enter Brand"
                                    value={formData.brand}
                                    onChange={getValue}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                        </div>

                        {/* Stock & Discount */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Stock
                                </label>

                                <input
                                    name="stock"
                                    type="number"
                                    placeholder="Enter Stock"
                                    value={formData.stock}
                                    onChange={getValue}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Discount (%)
                                </label>

                                <input
                                    name="discount"
                                    type="number"
                                    placeholder="Enter Discount"
                                    value={formData.discount}
                                    onChange={getValue}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Image URL
                            </label>

                            <input
                                name="image"
                                type="file"
                                placeholder="https://example.com/image.jpg"
                                value={formData.image}
                                onChange={getValue}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* New Arrival */}
                        <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-4">

                            <input
                                name="isNewArrival"
                                type="checkbox"
                                checked={formData.isNewArrival}
                                onChange={getValue}
                                className="w-5 h-5 accent-blue-600"
                            />

                            <label className="font-medium text-gray-700">
                                Mark as New Arrival
                            </label>

                        </div>

                        {/* Update Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition duration-300 hover:shadow-xl"
                        >
                            Update Product
                        </button>

                    </form>

                </div>

            </div>

        </>
    )
}

export default UpdateProduct