export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-2xl font-bold">
          🚂 TransitOS
        </h1>

        <nav className="flex gap-6">
          <a href="/">Home</a>
          <a href="#">Routes</a>
          <a href="#">Live Map</a>
          <a href="#">About</a>
        </nav>
      </div>
    </header>
  );
}