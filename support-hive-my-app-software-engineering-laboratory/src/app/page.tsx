import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <section className="w-full max-w-2xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support Hive</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A professional platform for customer support teams to manage tickets, access knowledge, and monitor performance.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-start">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Ticket Management</h2>
          <p className="text-gray-500 text-sm">Efficiently create, track, and resolve support tickets with real-time updates.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-start">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Knowledge Base</h2>
          <p className="text-gray-500 text-sm">Find helpful articles and FAQs to resolve issues and empower users.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-start">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Dashboards</h2>
          <p className="text-gray-500 text-sm">Monitor support performance and gain actionable insights.</p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl">
        <a
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
          href="/tickets"
        >
          Manage Tickets
        </a>
        <a
          className="w-full md:w-auto px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-md shadow hover:bg-gray-200 transition"
          href="/knowledge-base"
        >
          Knowledge Base
        </a>
        <a
          className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 transition"
          href="/about"
        >
          About Support Hive
        </a>
      </section>
    </main>
  );
}
