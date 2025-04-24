import heroImage from "../assets/image-2.png"; // ✅ Use a valid variable name for the imported image
import { ChevronRight, Menu, Play } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-rose-300 text-gray-800 ">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex items-center font-sora justify-between">
          <div className="text-xl font-bold tracking-wider uppercase">
            Bloggy
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            <a href="#" className="text-sm hover:text-red-600">
              Services
            </a>
            <a href="#" className="text-sm hover:text-red-500">
              About
            </a>
            <a href="#" className="text-sm hover:text-red-600">
              Careers
            </a>
            <a href="#" className="text-sm hover:text-red-600">
              Reviews
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="hidden text-sm uppercase md:block">
              Contact Us
            </button>
            <Menu className="md:hidden" />
          </div>
        </header>

        {/* Main Content */}
        <main className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-20 md:grid-cols-2">
          {/* Left Column - Hero Text */}
          <div className="relative z-10">
            <h1 className="text-6xl leading-tight font-sora font-bold tracking-tighter uppercase md:text-8xl">
              Discover. Write.
              <br />
              Inspire.
            </h1>

            <div className="mt-12 md:mt-20">
              <div className="text-sm font-sora font-medium uppercase md:text-base">
                About
              </div>
              <p className="mt-2  max-w-md text-sm leading-snug font-sora font-large uppercase md:text-base">
                Join a community of passionate storytellers, creators, and
                thinkers. Share your voice with the world and explore fresh
                perspectives from every corner of the internet.
              </p>

              <button className="mt-6 flex items-center font-sora font-bold space-x-2 rounded-lg bg-white/20 px-6 py-2 backdrop-blur-sm hover:bg-rose-400">
                <span className="text-sm uppercase">Explore More</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="absolute right-0 bottom-0 text-xl font-light tracking-widest opacity-50">
              C O D E M I L E
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="relative">
            {/* Profile Image with Glow */}
            <div className="relative flex justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-white/30 blur-xl"></div>
              <img
                src={heroImage}
                alt="Profile with digital glow"
                width={500}
                height={400}
                className="relative z-10  rounded-full"
              />

              {/* Play Button */}
              <button className="absolute bottom-10 left-10 z-20 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-rose-400 hover:shadow-rose-200">
                <Play size={20} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
