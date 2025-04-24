import pro from "../assets/image.png";

function Chatbot() {
  return (
    <div className="fixed bottom-32 right-6 z-50">
      {/* Chat Button - Visible when chat is closed */}
      <button
        className="w-14 h-14 bg-indigo-700 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-all duration-200 group"
        onClick={() =>
          document.getElementById("chatWindow").classList.toggle("hidden")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chat Window - Hidden by default */}
      <div
        id="chatWindow"
        className="hidden absolute bottom-16 right-0 w-80 sm:w-96 h-80% bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
      >
        {/* Chat Header */}
        <div className="bg-indigo-700 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Support Bot</h3>
              <p className="text-xs text-indigo-100">Online</p>
            </div>
          </div>
          <button
            className="text-white hover:text-indigo-100"
            onClick={() =>
              document.getElementById("chatWindow").classList.add("hidden")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {/* Bot Message */}
          <div className="flex mb-4">
            <div className="w-8 h-8 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="ml-3 bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
              <p className="text-sm">👋 Hi there! How can I help you today?</p>
              <span className="text-xs text-gray-500 mt-1 block">10:23 AM</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-indigo-100 p-3 rounded-lg rounded-tr-none max-w-[80%]">
              <p className="text-sm">I need help with my blog post.</p>
              <span className="text-xs text-gray-500 mt-1 block">10:24 AM</span>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <img src={pro} alt="user profile " className="rounded-full" />
            </div>
          </div>

          {/* Bot Message */}
          <div className="flex mb-4">
            <div className="w-8 h-8 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="ml-3 bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
              <p className="text-sm">It was more liked blog ever.</p>
              <span className="text-xs text-gray-500 mt-1 block">10:25 AM</span>
            </div>
          </div>

          {/* Typing Indicator */}
          <div className="flex">
            <div className="w-8 h-8 bg-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="ml-3 bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-700 hover:text-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Powered by AI</span>
            <button className="text-indigo-700 hover:underline">
              Suggested responses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
