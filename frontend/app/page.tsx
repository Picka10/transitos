import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100">
        <section className="mx-auto max-w-7xl p-10">
        <h1 className="text-5xl font-bold text-blue-700">
          🚂 TransitOS
        </h1>

        <p className="mt-4 text-xl text-slate-700">
          Real-time information for Ripley's Train Service
        </p>

        <div className="mt-10 rounded-xl border-2 border-dashed border-slate-300 bg-white p-20 text-center">
          <h2 className="text-2xl font-semibold">
            Interactive Map Coming Soon
          </h2>

          <p className="mt-4 text-slate-500">
            Sprint 1 is currently under development.
          </p>
        </div>
      </section>
      </main>
    </>
  );
}