import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4 text-center">Support Hive</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
        Your all-in-one platform for managing customer support tickets, empowering teams, and delivering exceptional service. Streamline ticket creation, tracking, and resolution with intuitive dashboards and a powerful knowledge base.
      </p>
      <div className="flex flex-wrap gap-6 justify-center mb-10">
        <div className="bg-white shadow-md rounded-lg p-6 w-72">
          <h2 className="text-lg font-semibold text-green-700 mb-2">Ticket Management</h2>
          <p className="text-gray-600">Create, track, and resolve support tickets efficiently. Stay updated with real-time status and notifications.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-72">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">Knowledge Base</h2>
          <p className="text-gray-600">Access helpful articles and FAQs to resolve issues faster and empower self-service for users.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-72">
          <h2 className="text-lg font-semibold text-yellow-700 mb-2">Dashboards</h2>
          <p className="text-gray-600">Monitor support performance, view analytics, and gain insights to improve customer satisfaction.</p>
        </div>
      </div>
      <div className="flex gap-6">
        <a
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          href="/tickets"
        >
          Manage Tickets
        </a>
        <a
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          href="/knowledge-base"
        >
          Knowledge Base
        </a>
        <a
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          href="/about"
        >
          About Support Hive
        </a>
      </div>
    </main>
  );
}
