



let Home = () => {

    return (
        <>
               <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">1,248</h2>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">Total Sales</p>
          <h2 className="text-3xl font-bold mt-2">2,568</h2>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-3xl font-bold mt-2">₹12,45,680</h2>
        </div>

      </div>

      {/* Recent Orders */}
      <div className="mt-8 bg-white rounded-xl shadow-md">

        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">
            Recent Orders
          </h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full text-left">

            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Customer Name</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">#ORD001</td>
                <td className="px-6 py-4">Rahul Sharma</td>
                <td className="px-6 py-4">04 Jul 2026</td>
                <td className="px-6 py-4">₹1,299</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Delivered
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">#ORD002</td>
                <td className="px-6 py-4">Priya Nair</td>
                <td className="px-6 py-4">03 Jul 2026</td>
                <td className="px-6 py-4">₹2,499</td>
                <td className="px-6 py-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">#ORD003</td>
                <td className="px-6 py-4">Arjun Kumar</td>
                <td className="px-6 py-4">03 Jul 2026</td>
                <td className="px-6 py-4">₹799</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Processing
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">#ORD004</td>
                <td className="px-6 py-4">Sneha Patel</td>
                <td className="px-6 py-4">02 Jul 2026</td>
                <td className="px-6 py-4">₹5,999</td>
                <td className="px-6 py-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Shipped
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">#ORD005</td>
                <td className="px-6 py-4">Anjali Verma</td>
                <td className="px-6 py-4">01 Jul 2026</td>
                <td className="px-6 py-4">₹1,850</td>
                <td className="px-6 py-4">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                    Cancelled
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">#ORD006</td>
                <td className="px-6 py-4">Vikram Singh</td>
                <td className="px-6 py-4">30 Jun 2026</td>
                <td className="px-6 py-4">₹3,299</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Delivered
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

        </>
    )
}

export default Home