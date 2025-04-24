// import blog from "../assets/blog.jpg";
// import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";

function Search() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-300 to-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}

        <h2 className="text-3xl font-sora font-bold mb-6">Where Next?</h2>
        {/* Search Component */}
        <div className="relative flex gap-1  ">
          <div className="grid grid-cols-3 gap-5 ">
            <div className="w-48 h-32 rounded-lg overflow-hidden">
              <img src={blog2} className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img src={blog3} className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img src={blog4} className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-48 rounded-lg overflow-hidden">
              <img src={blog2} className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img src={blog3} className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img src={blog4} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-12 bg-white font-sora  rounded-xl p-8 shadow-lg z-20 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for travel destinations or activities..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free
              </button>
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Paid
              </button>
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                Great Views
              </button>
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Historical
              </button>
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Long Hikes
              </button>
            </div>

            <div className="mt-8">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold">'s Choice</h3>
                <button className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 ">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img src={blog5} className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img src={blog6} className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img src={blog7} className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img src={blog5} className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img src={blog6} className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img src={blog7} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
