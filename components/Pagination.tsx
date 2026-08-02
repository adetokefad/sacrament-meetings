"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  hasNextPage: boolean;
}

export default function Pagination({ hasNextPage }: Props) {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query") ?? "";

  const previous = new URLSearchParams();

  if (query) previous.set("query", query);
  previous.set("page", String(page - 1));

  const next = new URLSearchParams();

  if (query) next.set("query", query);
  next.set("page", String(page + 1));

  return (
    <nav
      className="mt-8 flex items-center justify-between"
      aria-label="Pagination"
    >
      {page > 1 ? (
        <Link
          href={`?${previous.toString()}`}
          className="rounded bg-gray-200 px-4 py-2"
        >
          Previous
        </Link>
      ) : (
        <span />
      )}

      <span>Page {page}</span>

      {hasNextPage ? (
        <Link
          href={`?${next.toString()}`}
          className="rounded bg-gray-200 px-4 py-2"
        >
          Next
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
