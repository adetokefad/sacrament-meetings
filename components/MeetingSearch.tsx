"use client";

import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      className="mb-6 w-full rounded-md border p-2"
      placeholder="Search meetings..."
      defaultValue={searchParams.get("query") ?? ""}
      aria-label="Search meetings"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
