import MeetingCard from "@/components/MeetingCard";
import MeetingSearch from "@/components/MeetingSearch";
import Pagination from "@/components/Pagination";
import { getMeetings, getMeetingCount } from "@/lib/meetings-db";

interface Props {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function MeetingsPage({ searchParams }: Props) {
  const params = await searchParams;

  const query = params.query ?? "";
  const page = Number(params.page) || 1;

  const meetings = await getMeetings(null, query, page);
  const total = await getMeetingCount(query);

  const hasNextPage = page * 5 < total;

  return (
    <>
      <MeetingSearch />

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>

      <Pagination hasNextPage={hasNextPage} />
    </>
  );
}
