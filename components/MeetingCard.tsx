import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border bg-white p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{meeting.date}</h3>

      <p className="mt-2">
        <strong>Meeting Type:</strong> {meeting.meetingType}
      </p>

      <p>
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <p>
        <strong>Conducting:</strong> {meeting.conducting}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 inline-block rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
      >
        View Details
      </Link>
    </article>
  );
}
