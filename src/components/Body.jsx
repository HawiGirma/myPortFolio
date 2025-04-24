import blog from "../assets/blog.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
// import blog6 from "../assets/blog6.jpg";
// import blog7 from "../assets/blog7.jpg";

function Body() {
  const blogPosts = [
    {
      title: "The Future of AI: Trends to Watch in 2025",
      image: blog,
      views: "500+",
    },
    {
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      image: blog1,
      views: "320+",
    },
    {
      title: "Cybersecurity in 2025: How to Stay Protected",
      image: blog2,
      views: "420+",
    },
    {
      title: "The Rise of Remote Work: Technologies Powering the Shift",
      image: blog3,
      views: "390+",
    },
    {
      title: "5G Technology: What It Means for the Future of Connectivity",
      image: blog4,
      views: "700+",
    },
    {
      title: "5G Technology: What It Means for the Future of Connectivity",
      image: blog5,
      views: "700+",
    },
  ];

  return (
    <div className="w-6xl mx-auto align-center px-32 py-8 bg-gradient-to-b from-gray-100 to-rose-300 ">
      <h1 className="text-3xl font-bold text-center mb-8">
        Latest <span className="text-amber-500">Tech Trends</span>
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-50 w-96 rounded-3xl  overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {post.views}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold h-20 mb-4">{post.title}</h3>
              <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-full flex items-center justify-between">
                <span>Read Full Article</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 bg-white text-gray-900 rounded-full p-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
