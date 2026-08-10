import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";
import { deleteMeeting } from "@/lib/actions";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg bg-white p-6 shadow">
      <h2 className="text-xl font-bold">{meeting.date}</h2>

      <p className="mt-2">
        <strong>Meeting Type:</strong> {meeting.meetingType}
      </p>

      <p>
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <p>
        <strong>Conducting:</strong> {meeting.conducting}
      </p>

      <div className="mt-4 flex gap-3">
        <Link
          href={`/meetings/${meeting.id}`}
          className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          View Details
        </Link>

        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
        >
          Edit
        </Link>

        <form action={deleteMeeting.bind(null, meeting.id)}>
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}
