export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-3xl font-bold">Sacrament Meeting Planner</h1>
          <p className="text-blue-200">Springfield Ward</p>
        </div>

        <p className="text-sm md:text-base">{today}</p>
      </div>
    </header>
  );
}
