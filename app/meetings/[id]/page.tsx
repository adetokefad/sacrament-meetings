import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

async function getMeeting(id: string): Promise<SacramentMeeting | null> {
  const res = await fetch(`http://localhost:3000/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  return res.json();
}

export default async function MeetingPage({ params }: Props) {
  const meeting = await getMeeting(params.id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}
