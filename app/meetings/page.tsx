import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default async function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {meetings.map((meeting) => (
        <MeetingCard
          key={meeting.id}
          meeting={meeting}
        />
      ))}
    </div>
  );
}
