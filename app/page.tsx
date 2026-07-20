import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-12 text-center">
      <h1 className="mb-4 text-5xl font-bold">
        Welcome to the Sacrament Meeting Planner
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-600">
        Plan, organize, and review sacrament meeting agendas with ease.
      </p>

      <Image
        src="/church.jpg"
        alt="Church building"
        width={900}
        height={500}
        className="mb-8 rounded-lg shadow-lg"
      />

      <Link
        href="/meetings"
        className="rounded bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
      >
        View Meetings
      </Link>
    </section>
  );
}
