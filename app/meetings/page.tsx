import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";
import { getBaseUrl } from "@/lib/api";

async function fetchMeetings(): Promise<SacramentMeeting[]> {
  const res = await fetch(`${getBaseUrl()}/api/meetings`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch meetings");
  }

  return res.json();
}

export default async function MeetingsPage() {
  const meetings = await fetchMeetings();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}
