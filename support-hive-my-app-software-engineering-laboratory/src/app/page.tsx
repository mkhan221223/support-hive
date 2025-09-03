import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-4 px-8 flex justify-between items-center bg-white shadow-sm fixed top-0 left-0 z-10">
        <div className="flex items-center gap-2">
          <Image src="/hive-logo.svg" alt="Support Hive Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-blue-700 tracking-tight">Support Hive</span>
        </div>
        <div className="flex gap-6 items-center">
          <a className="text-gray-700 hover:text-blue-600 transition font-medium" href="/tickets">
            Tickets
          </a>
          <a className="text-gray-700 hover:text-blue-600 transition font-medium" href="/knowledge-base">
            Knowledge Base
          </a>
          <a className="text-gray-700 hover:text-blue-600 transition font-medium" href="/about">
            About
          </a>
          <div className="flex gap-2 ml-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-gray-100 text-blue-700 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 pt-32 pb-16 px-4">
        <section className="w-full max-w-2xl text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-5 drop-shadow-lg">Support Hive</h1>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-14">
          <div className="bg-white border-t-4 border-blue-500 rounded-xl shadow-md p-7 flex flex-col items-start hover:scale-105 transition-transform">
            <div className="mb-3">
              <Image src="/ticket-icon.svg" alt="Ticket Management" width={32} height={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ticket Management</h2>
            <p className="text-gray-500 text-base">Create, track, and resolve support requests with instant updates and smart automation.</p>
          </div>
          <div className="bg-white border-t-4 border-yellow-500 rounded-xl shadow-md p-7 flex flex-col items-start hover:scale-105 transition-transform">
            <div className="mb-3">
              <Image src="/knowledge-icon.svg" alt="Knowledge Base" width={32} height={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Knowledge Base</h2>
            <p className="text-gray-500 text-base">Access articles, FAQs, and guides to empower users and solve problems quickly.</p>
          </div>
          <div className="bg-white border-t-4 border-green-500 rounded-xl shadow-md p-7 flex flex-col items-start hover:scale-105 transition-transform">
            <div className="mb-3">
              <Image src="/dashboard-icon.svg" alt="Dashboards" width={32} height={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Dashboards</h2>
            <p className="text-gray-500 text-base">Visualize team performance and gain actionable insights in real time.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl">
          <a
            className="w-full md:w-auto px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
            href="/tickets"
          >
            Manage Tickets
          </a>
          <a
            className="w-full md:w-auto px-7 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-500 transition"
            href="/knowledge-base"
          >
            Knowledge Base
          </a>
          <a
            className="w-full md:w-auto px-7 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
            href="/about"
          >
            About Support Hive
          </a>
        </section>
      </main>
    </div>
  );
}