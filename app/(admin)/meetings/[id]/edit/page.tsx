interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditMeetingPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Edit Meeting {id} — Coming in Week 04
      </h1>
    </div>
  );
}
