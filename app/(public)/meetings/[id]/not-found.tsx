import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Meeting not found</h2>

      <p className="mt-3 text-gray-600">
        The sacrament meeting you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/meetings"
        className="mt-6 rounded bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
      >
        Back to Meetings
      </Link>
    </div>
  );
}
