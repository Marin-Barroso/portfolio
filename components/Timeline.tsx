import { content } from "@/data/content";

export default function Timeline() {
  return (
    <section id="parcours" className="py-24 bg-anthracite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-barlow font-bold text-4xl sm:text-5xl text-white mb-16 tracking-wider">
          PARCOURS
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-barlow font-semibold text-xl text-cyan mb-8 tracking-wide">FORMATION</h3>
            <div className="space-y-6">
              {content.timeline.education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-cyan/30">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-cyan rounded-full -translate-x-1/2" />
                  <div className="text-cyan font-medium mb-1">{edu.year}</div>
                  <div className="text-white font-semibold mb-1">{edu.title}</div>
                  <div className="text-white/70 text-sm mb-1">{edu.specialty}</div>
                  <div className="text-white/50 text-sm">{edu.location}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-barlow font-semibold text-xl text-cyan mb-8 tracking-wide">EXPÉRIENCES</h3>
            <div className="space-y-6">
              {content.timeline.experiences.map((exp, index) => (
                <div key={index} className={`relative pl-8 border-l-2 ${exp.isAutomotive ? "border-cyan" : "border-white/20"}`}>
                  <div className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-1/2 ${exp.isAutomotive ? "bg-cyan" : "bg-white"}`} />
                  <div className="text-white/60 font-medium mb-1">{exp.year} · {exp.duration}</div>
                  <div className="text-white font-semibold mb-1">{exp.title}</div>
                  <div className="text-white/70 text-sm mb-1">{exp.company}</div>
                  {exp.description && <div className="text-white/50 text-sm">{exp.description}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
