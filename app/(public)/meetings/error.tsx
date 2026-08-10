"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        Something went wrong!
      </h2>

      <p className="mt-3 text-gray-600">
        We couldn&apos;t load the meetings right now. Please try again.
      </p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded border border-gray-300 px-5 py-2 text-gray-700 hover:bg-gray-100"
        >
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}
