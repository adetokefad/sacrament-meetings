export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-100 py-6 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Sacrament Meeting Planner</p>

      <p className="text-sm">Built with Next.js and Tailwind CSS</p>
    </footer>
  );
}
