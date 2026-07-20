import NavLinks from "@/components/NavLinks";

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavLinks />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="mb-6 text-3xl font-bold">Sacrament Meetings</h2>

        {children}
      </section>
    </>
  );
}
