import { content } from "@/data/content";

export default function CompetenceTable() {
  return (
    <section className="py-24 bg-anthracite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-barlow font-bold text-4xl sm:text-5xl text-white mb-16 tracking-wider">
          TABLEAU DE VALORISATION
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 font-barlow font-semibold text-cyan tracking-wide">ACTIVITÉ</th>
                <th className="text-left py-4 px-4 font-barlow font-semibold text-cyan tracking-wide">SAVOIR</th>
                <th className="text-left py-4 px-4 font-barlow font-semibold text-cyan tracking-wide">SAVOIR-FAIRE</th>
                <th className="text-left py-4 px-4 font-barlow font-semibold text-cyan tracking-wide">SAVOIR-ÊTRE</th>
              </tr>
            </thead>
            <tbody>
              {content.competenceTable.map((row, index) => (
                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">{row.activity}</td>
                  <td className="py-4 px-4 text-white/70">{row.savoir}</td>
                  <td className="py-4 px-4 text-white/70">{row.savoirFaire}</td>
                  <td className="py-4 px-4 text-white/70">{row.savoirEtre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
