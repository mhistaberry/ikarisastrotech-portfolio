export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10">
      
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold text-purple-400">
          IkarisAstroTech
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Get the best of everything
        </p>
      </section>

      <section className="mb-20 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-400">
          Creative graphics designer focused on futuristic and visually
          striking designs.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="p-6 bg-gray-900 rounded-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold mb-2">
                Project {item}
              </h3>
              <p className="text-gray-400">
                Placeholder project description
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        <p className="text-gray-400">
          Branding • Social Media Design • UI Design • Creative Direction
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400 mb-4">
          ikarisatrotech@gmail.com
        </p>
        <button className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
          Get in Touch
        </button>
      </section>

    </div>
  );
}
