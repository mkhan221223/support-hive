import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to Support Hive!</h1>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <p className="mt-4 text-lg text-gray-600">
        This is your custom home page. Edit <code>src/app/page.tsx</code> to change it!
      </p>
      <a
        className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        href="/about"
      >
        Learn more about us
      </a>
    </main>
  );
}
