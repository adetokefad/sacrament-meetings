import { getMeetingById } from "@/lib/meetings-db";
import { notFound } from "next/navigation";
import EditMeetingForm from "@/components/EditMeetingForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditMeetingPage({ params }: Props) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return <EditMeetingForm meeting={meeting} />;
}
