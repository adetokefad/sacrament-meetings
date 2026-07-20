import type { SacramentMeeting } from "@/lib/types";

interface Props {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: Props) {
  return (
    <div className="space-y-6 rounded-lg bg-white p-8 shadow">
      <h2 className="text-3xl font-bold">{meeting.date}</h2>

      <p>
        <strong>Meeting Type:</strong> {meeting.meetingType}
      </p>

      <p>
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <p>
        <strong>Conducting:</strong> {meeting.conducting}
      </p>

      <hr />

      <section>
        <h3 className="font-semibold">Announcements</h3>

        <ul className="list-disc pl-6">
          {meeting.announcements?.map((announcement, index) => (
            <li key={index}>{announcement}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="font-semibold">Opening Hymn</h3>
        <p>
          #{meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>
      </section>

      <section>
        <h3 className="font-semibold">Opening Prayer</h3>
        <p>{meeting.openingPrayer}</p>
      </section>

      <section>
        <h3 className="font-semibold">Ward Business</h3>

        <ul className="list-disc pl-6">
          {meeting.wardBusiness.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="font-semibold">Sacrament Hymn</h3>

        <p>
          #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h3 className="font-semibold">Speakers & Musical Numbers</h3>

        <ul className="list-disc pl-6">
          {meeting.speakers.map((speaker, index) => (
            <li key={index}>
              <strong>{speaker.name}</strong>{" "}
              {speaker.topic && `- ${speaker.topic}`} ({speaker.type})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="font-semibold">Closing Hymn</h3>

        <p>
          #{meeting.closingHymn.number} - {meeting.closingHymn.title}
        </p>
      </section>

      <section>
        <h3 className="font-semibold">Closing Prayer</h3>

        <p>{meeting.closingPrayer}</p>
      </section>
    </div>
  );
}
