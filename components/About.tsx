import { content } from "@/data/content";

export default function About() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-barlow font-bold text-4xl sm:text-5xl text-anthracite mb-16 tracking-wider">
          À PROPOS
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-anthracite/10 rounded-lg overflow-hidden flex items-center justify-center">
              <svg className="w-32 h-32 text-anthracite/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div>
            <p className="text-anthracite/80 text-lg leading-relaxed mb-8">{content.about.text}</p>

            <div>
              <h3 className="font-barlow font-semibold text-xl text-anthracite mb-4 tracking-wide">CENTRES D'INTÉRÊT</h3>
              <ul className="space-y-2">
                {content.about.interests.map((interest, index) => (
                  <li key={index} className="flex items-center gap-3 text-anthracite/70">
                    <span className="w-2 h-2 bg-cyan rounded-full" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
