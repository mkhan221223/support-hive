import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <nav className="w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm fixed top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Support Hive Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl md:text-2xl font-bold text-indigo-700 tracking-tight">Support Hive</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-700 font-medium hover:text-indigo-600 transition">Home</a>
            <a href="/tickets" className="text-gray-700 font-medium hover:text-indigo-600 transition">Tickets</a>
            <a href="/knowledge-base" className="text-gray-700 font-medium hover:text-indigo-600 transition">Knowledge Base</a>
            <a href="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition">About</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition">Log in</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium shadow hover:bg-indigo-700 transition">Sign up</button>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-32">
        <section className="w-full max-w-2xl text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4 drop-shadow-lg">Support Hive</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            A modern platform for customer support teams to manage tickets, access knowledge, and monitor performance.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          <div className="bg-white border border-indigo-100 rounded-xl shadow-lg p-7 flex flex-col items-start hover:scale-105 transition-transform">
            <div className="mb-3">
              <Image src="/icons/ticket.svg" alt="Ticket Management" width={32} height={32} />
            </div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Ticket Management</h2>
            <p className="text-gray-600 text-base">Efficiently create, track, and resolve support tickets with real-time updates.</p>
          </div>
          <div className="bg-white border border-indigo-100 rounded-xl shadow-lg p-7 flex flex-col items-start hover:scale-105 transition-transform">
            <div className="mb-3">
              <Image src="/icons/knowledge.svg" alt="Knowledge Base" width={32} height={32} />
            </div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Knowledge Base</h2>
            <p className="text-gray-600 text-base">Find helpful articles and FAQs to resolve issues and empower users.</p>
          </div>
          <div className="bg-white border border-indigo-100 rounded-xl shadow-lg p-7 flex flex-col items-start hover:scale-105 transition-transform">
            <div className="mb-3">
              <Image src="/icons/dashboard.svg" alt="Dashboards" width={32} height={32} />
            </div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Dashboards</h2>
            <p className="text-gray-600 text-base">Monitor support performance and gain actionable insights.</p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl mb-10">
          <a
            className="w-full md:w-auto px-7 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition text-lg"
            href="/tickets"
          >
            Manage Tickets
          </a>
          <a
            className="w-full md:w-auto px-7 py-3 bg-white text-indigo-700 font-medium border border-indigo-200 rounded-lg shadow hover:bg-indigo-50 transition text-lg"
            href="/knowledge-base"
          >
            Knowledge Base
          </a>
          <a
            className="w-full md:w-auto px-7 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition text-lg"
            href="/about"
          >
            About Support Hive
          </a>
        </section>
      </main>
    </div>
  );
}