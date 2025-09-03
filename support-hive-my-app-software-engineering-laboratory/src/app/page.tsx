import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="w-full max-w-3xl text-center mb-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-yellow-500 mb-4 drop-shadow-lg">Support Hive</h1>
        <p className="text-2xl text-gray-700 mb-6 font-medium">
          Your all-in-one platform for modern customer support. Effortlessly manage tickets, empower teams, and deliver exceptional service.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mb-12">
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-80 border border-gray-100 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h2 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Ticket Management
          </h2>
          <p className="text-gray-600 text-base">Create, track, and resolve support tickets with real-time updates and notifications.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-80 border border-gray-100 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
            Knowledge Base
          </h2>
          <p className="text-gray-600 text-base">Access helpful articles and FAQs to resolve issues faster and empower self-service for users.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-80 border border-gray-100 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h2 className="text-xl font-bold text-yellow-700 mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
            Dashboards
          </h2>
          <p className="text-gray-600 text-base">Monitor support performance, view analytics, and gain insights to improve customer satisfaction.</p>
        </div>
      </div>
      <div className="flex gap-8 justify-center">
        <a
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
          href="/tickets"
        >
          Manage Tickets
        </a>
        <a
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-yellow-500 transition-all duration-300"
          href="/knowledge-base"
        >
          Knowledge Base
        </a>
        <a
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:from-yellow-500 hover:to-green-600 transition-all duration-300"
          href="/about"
        >
          About Support Hive
        </a>
      </div>
    </main>
  );
}
