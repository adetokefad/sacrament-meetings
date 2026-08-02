import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";
import { getBaseUrl } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

async function getMeeting(id: string): Promise<SacramentMeeting | null> {
  const res = await fetch(`${getBaseUrl()}/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch meeting");
  }

  return res.json();
}

export default async function MeetingPage({ params }: Props) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}
