import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";



let ProductList = () => {


    let [products, setProducts] = useState([]);
    let [del, setDel] = useState(false);

    let [loading, setLoading] = useState(true);


    useEffect(() => {

        let getProducts = async () => {

            let token = localStorage.getItem("token")

            try {

                let response = await api.get('/products', {

                    headers: {

                        Authorization: `Bearer ${token}`
                    }
                });

                setProducts(response.data.data);


            } catch (error) {

                console.log(error.response);

            } finally {

                setLoading(false);
            }

        }

        getProducts();

    }, [del]);

    if (loading) {

        return <Loading text="Loading Products..." />

    }

    let deleteProduct = async (id) => {

        let token = localStorage.getItem('token')

        let isConfirm = window.confirm('Delete This Product')

        if (!isConfirm) {

            return;
        }

        try {

            let response = await api.delete(`/products/${id}`, {

                headers: {

                    Authorization: `Bearer ${token}`
                }
            });

            alert(response.data.message);

            setDel(!del);

        } catch (error) {

            console.log(error);


        }
    }

    if (products.length === 0) {

        return (

            <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 flex items-center justify-center p-6">

                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 max-w-lg w-full text-center">

                    <div className="w-24 h-24 mx-auto rounded-full bg-cyan-100 flex items-center justify-center mb-6">

                        <span className="text-5xl">📦</span>

                    </div>

                    <h1 className="text-3xl font-bold text-slate-800">
                        No Products Found
                    </h1>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Your inventory is currently empty.
                        Start by creating your first product to manage your store.
                    </p>

                    <Link to="/products/create">

                        <button className="mt-8 w-full md:w-auto px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">

                            + Create First Product

                        </button>

                    </Link>

                </div>

            </div>

        )
    }


    return (

        <>

            <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 md:p-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">

                    <Link to="/">
                        <button className="px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition duration-300 shadow-md">
                            ← Back
                        </button>
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Product Inventory
                    </h1>

                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {products.map((product) => (

                        <div
                            key={product._id}
                            className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                        >


                            <div className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex justify-center items-center p-8">

                                {/* New Arrival Badge */}
                                {product.isNewArrival && (
                                    <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
                                        ✨ New Arrival
                                    </span>
                                )}

                                <img
                                    src={`http://localhost:1000/images/${product.image}`}
                                    alt={product.productName}
                                    className="w-full h-48 object-contain bg-white"
                                />

                            </div>

                            {/* Details */}

                            <div className="p-6">

                                <h2 className="text-2xl font-bold text-gray-800 text-center">
                                    {product.productName}
                                </h2>

                                <div className="flex justify-center mt-5">

                                    <span className="bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full font-semibold">
                                        {product.category}
                                    </span>

                                </div>

                                <div className="mt-6 bg-purple-50 rounded-2xl p-4 text-center">

                                    <p className="text-gray-500 text-sm">
                                        Brand
                                    </p>

                                    <h3 className="text-xl font-bold text-purple-700 mt-1">
                                        {product.brand}
                                    </h3>

                                </div>

                                {/* Buttons */}

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">

                                    <Link to={`/products/${product._id}`}>
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300">
                                            Details
                                        </button>
                                    </Link>

                                    <Link to={`/products/update/${product._id}`}>
                                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition duration-300">
                                            Update
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => deleteProduct(product._id)}
                                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition duration-300"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </>


    )
}

export default ProductList