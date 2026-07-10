


let Loading = ({ text = "Loading..." }) => {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4">

            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>


            <h2 className="text-xl font-semibold text-gray-700">
                {text}

            </h2>

        </div>

    )
}

export default Loading