export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-cyan-400">
        MPSC FREE MOCK
      </h1>

      <p className="mt-4 text-gray-300">
        Free mock tests for Mizoram students.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="border border-cyan-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-cyan-300">
            Reasoning
          </h2>

          <p className="mt-2 text-gray-400">
            Logical reasoning and analytical questions.
          </p>
        </div>

        <div className="border border-green-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-300">
            Teaching Aptitude
          </h2>

          <p className="mt-2 text-gray-400">
            Education and teaching methodology.
          </p>
        </div>

        <div className="border border-yellow-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-yellow-300">
            Numerical Ability
          </h2>

          <p className="mt-2 text-gray-400">
            Quantitative aptitude and DI.
          </p>
        </div>

        <div className="border border-red-500 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-300">
            ICT
          </h2>

          <p className="mt-2 text-gray-400">
            Computer awareness and digital literacy.
          </p>
        </div>

      </div>
    </main>
  );
}