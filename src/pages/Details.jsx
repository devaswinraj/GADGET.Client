import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import {
    ArrowLeft,
    Package,
    BadgeDollarSign,
    Tag,
    Boxes,
    Star,
    ShoppingCart,
    Pencil,
} from "lucide-react";
import Loading from "../components/Loading";




let Details = () => {

    let api_url = import.meta.env.VITE_API_URL


    let { id } = useParams()

    let [product, setProduct] = useState({});
    let [loading, setLoading] = useState(true);


    useEffect(() => {

        let getProduct = async () => {

            let token = localStorage.getItem('token')

            try {

                let response = await api.get(`/products/${id}`, {

                    headers: {

                        Authorization: `Bearer ${token}`
                    }

                })

                setProduct(response.data.data)


            } catch (error) {

                console.log(error.response);


            } finally {

                setLoading(false);
            }

        }

        getProduct();

    }, [id]);

    if (loading) {

        return <Loading text="Loading Product..." />

    }



    return (

        <>

            <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 py-10 px-5">

                {/* Back Button */}
                <Link to="/products">
                    <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-5 py-2 rounded-lg transition mb-8">
                        <ArrowLeft size={18} />
                        Back
                    </button>
                </Link>

                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

                    <div className="grid lg:grid-cols-2">

                        {/* Product Image */}
                        <div className="bg-gray-100 flex items-center justify-center p-10 relative">

                            {product.discount > 0 && (
                                <span className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                                    {product.discount}% OFF
                                </span>
                            )}

                            {product.isNewArrival && (
                                <span className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse">
                                    NEW
                                </span>
                            )}

                            <img
                                src={
                                    `${api_url}/images/${product.image}`
                                }
                                alt={product.productName}
                                className="w-full max-w-md h-[420px] object-contain hover:scale-110 transition duration-500"
                            />

                        </div>

                        {/* Product Details */}
                        <div className="p-10">

                            <h1 className="text-4xl font-bold text-gray-800">
                                {product.productName}
                            </h1>

                            <p className="text-lg text-gray-500 mt-2">
                                {product.category}
                            </p>

                            {/* Fake Rating */}
                            <div className="flex items-center gap-1 mt-4">

                                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                                <Star className="fill-yellow-400 text-yellow-400" size={20} />

                                <span className="ml-2 text-gray-500">
                                    (5.0)
                                </span>

                            </div>

                            <div className="text-4xl font-bold text-green-600 mt-6">
                                ₹{product.price}
                            </div>

                            <div className="grid grid-cols-2 gap-5 mt-8">

                                <div className="bg-gray-50 rounded-xl p-5 shadow">
                                    <Package className="text-blue-500 mb-2" />
                                    <p className="text-gray-500">Brand</p>
                                    <h3 className="font-semibold">{product.brand}</h3>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-5 shadow">
                                    <Boxes className="text-green-500 mb-2" />
                                    <p className="text-gray-500">Stock</p>

                                    <h3
                                        className={`font-semibold ${product.stock > 0
                                            ? "text-green-600"
                                            : "text-red-500"
                                            }`}
                                    >
                                        {product.stock} Available
                                    </h3>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-5 shadow">
                                    <BadgeDollarSign className="text-purple-500 mb-2" />
                                    <p className="text-gray-500">Discount</p>
                                    <h3>{product.discount}%</h3>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-5 shadow">
                                    <Tag className="text-orange-500 mb-2" />
                                    <p className="text-gray-500">Category</p>
                                    <h3>{product.category}</h3>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-10">

                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                                    <ShoppingCart size={20} />
                                    Add to Cart
                                </button>

                                <Link to={`/products/update/${product._id}`} className="flex-1">
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                                        <Pencil size={20} />
                                        Edit Product
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </>

    )
}

export default Details