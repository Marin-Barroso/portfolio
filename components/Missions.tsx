"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { Icons } from "./Icons";

export default function Missions() {
  const [filter, setFilter] = useState<"all" | "pro" | "perso">("all");
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  const filteredMissions = content.missions.filter((mission) => {
    if (filter === "all") return true;
    return mission.type.toLowerCase() === filter;
  });

  const getMissionIcon = (missionId: number) => {
    switch (missionId) {
      case 1: return <Icons.Car />;
      case 2: return <Icons.Welding />;
      case 3: return <Icons.Motorcycle />;
      case 4: return <Icons.Electricity />;
      default: return <Icons.Tool />;
    }
  };

  const getStepIcon = (stepIndex: number) => {
    switch (stepIndex) {
      case 0: return <Icons.Electricity />;
      case 1: return <Icons.Tool />;
      case 2: return <Icons.Mechanic />;
      default: return <Icons.Mechanic />;
    }
  };

  return (
    <section id="missions" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-barlow font-bold text-4xl sm:text-5xl text-anthracite mb-8 tracking-wider">
          MISSIONS
        </h2>

        <div className="flex flex-wrap gap-3 mb-12">
          <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === "all" ? "bg-cyan text-white" : "bg-white text-anthracite/70 hover:bg-white/80"}`}>
            Toutes
          </button>
          <button onClick={() => setFilter("pro")} className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === "pro" ? "bg-cyan text-white" : "bg-white text-anthracite/70 hover:bg-white/80"}`}>
            Expérience professionnelle
          </button>
          <button onClick={() => setFilter("perso")} className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === "perso" ? "bg-cyan text-white" : "bg-white text-anthracite/70 hover:bg-white/80"}`}>
            Projet personnel
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredMissions.map((mission) => (
            <div key={mission.id} className="bg-white rounded-lg overflow-hidden border border-anthracite/10 hover:border-cyan/30 transition-all">
              <div className="relative h-48 bg-anthracite/10 flex items-center justify-center">
                <div className="w-24 h-24 text-cyan/50">{getMissionIcon(mission.id)}</div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${mission.type === "Pro" ? "bg-cyan text-white" : "bg-anthracite text-white"}`}>
                    {mission.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-barlow font-semibold text-xl text-anthracite mb-2">{mission.title}</h3>
                <div className="text-sm text-anthracite/60 mb-4">
                  <div>{mission.location}</div>
                  <div>{mission.period}</div>
                  <div>Durée : {mission.duration}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mission.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-anthracite/5 text-anthracite/70 text-xs rounded">{tag}</span>
                  ))}
                </div>
                <button onClick={() => setExpandedMission(expandedMission === mission.id ? null : mission.id)} className="text-cyan font-medium hover:text-cyan/80 transition-colors">
                  {expandedMission === mission.id ? "Masquer le détail" : "Voir le détail"}
                </button>
              </div>

              {expandedMission === mission.id && (
                <div className="px-6 pb-6 border-t border-anthracite/10 pt-6">
                  <div className="space-y-4 text-sm">
                    <div><span className="font-medium text-anthracite">Poste :</span> <span className="text-anthracite/70">{mission.details.post}</span></div>
                    <div><span className="font-medium text-anthracite">Mission :</span> <span className="text-anthracite/70">{mission.details.mission}</span></div>
                    <div><span className="font-medium text-anthracite">Moyens :</span> <span className="text-anthracite/70">{mission.details.means}</span></div>
                    <div><span className="font-medium text-anthracite">Contraintes :</span> <span className="text-anthracite/70">{mission.details.constraints}</span></div>

                    <div>
                      <span className="font-medium text-anthracite block mb-3">Étapes :</span>
                      <div className="space-y-3">
                        {mission.details.steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-cyan text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">{index + 1}</div>
                            <div className="flex-1">
                              <div className="bg-anthracite/5 rounded-lg p-6 mb-2 flex items-center justify-center">
                                <div className="w-16 h-16 text-cyan/50">{getStepIcon(index)}</div>
                              </div>
                              <div className="text-anthracite/70">{step.caption}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div><span className="font-medium text-anthracite">Faits marquants :</span> <span className="text-anthracite/70">{mission.details.highlights}</span></div>
                    <div><span className="font-medium text-anthracite">Compétences acquises :</span> <span className="text-anthracite/70">{mission.details.skills}</span></div>
                    <div><span className="font-medium text-anthracite">Ce que j'ai aimé :</span> <span className="text-anthracite/70">{mission.details.liked}</span></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
