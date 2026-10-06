"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { Icons } from "./Icons";

export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes("mécanique") || name.includes("restauration")) return <Icons.Mechanic />;
    if (name.includes("solidworks") || name.includes("catia") || name.includes("cao")) return <Icons.CAD />;
    if (name.includes("gestion") || name.includes("planning")) return <Icons.Management />;
    if (name.includes("client")) return <Icons.Client />;
    if (name.includes("électri")) return <Icons.Electric />;
    if (name.includes("cnc")) return <Icons.CNC />;
    return <Icons.Tool />;
  };

  const getLinkedMissions = (skillName: string) => {
    const skill = content.skills.technical.find(s => s.name === skillName);
    if (!skill || !skill.linkedMissions) return [];
    // @ts-ignore
    return skill.linkedMissions.map(id => content.missions.find(m => m.id === id)).filter(Boolean);
  };

  const getLinkedExperiences = (skillName: string) => {
    const skill = content.skills.technical.find(s => s.name === skillName);
    if (!skill || !skill.linkedExperiences) return [];
    // @ts-ignore
    return skill.linkedExperiences.map(id => content.timeline.experiences[id]).filter(Boolean);
  };

  const totalLinked = (skillName: string) => {
    return getLinkedMissions(skillName).length + getLinkedExperiences(skillName).length;
  };

  return (
    <section id="competences" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-barlow font-bold text-4xl sm:text-5xl text-anthracite mb-16 tracking-wider">
          COMPÉTENCES
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h3 className="font-barlow font-semibold text-xl text-anthracite mb-6 tracking-wide">
              COMPÉTENCES TECHNIQUES
            </h3>
            <div className="space-y-3">
              {content.skills.technical.map((skill, index) => {
                const hasLinks = totalLinked(skill.name) > 0;
                return (
                  <div key={index} className="relative">
                    <button
                      onClick={() => hasLinks ? setExpandedSkill(expandedSkill === skill.name ? null : skill.name) : undefined}
                      className={`w-full text-left bg-white p-4 rounded-lg border border-anthracite/10 hover:border-cyan/30 transition-colors flex items-start gap-3 ${hasLinks ? 'cursor-pointer' : ''}`}
                    >
                      <div className="w-6 h-6 text-cyan/50 flex-shrink-0 mt-0.5">{getSkillIcon(skill.name)}</div>
                      <div className="flex-1">
                        <div className="font-medium text-anthracite mb-1 flex items-center gap-2">
                          {skill.name}
                          {hasLinks && (
                            <>
                              <Icons.ChevronDown />
                              <span className="text-xs text-cyan font-medium">{totalLinked(skill.name)} mission{totalLinked(skill.name) > 1 ? 's' : ''}</span>
                            </>
                          )}
                        </div>
                        <div className="text-sm text-anthracite/60">{skill.level}</div>
                      </div>
                    </button>

                    {expandedSkill === skill.name && hasLinks && (
                      <div className="mt-2 ml-4 p-4 bg-white rounded-lg border border-anthracite/10 space-y-2">
                        {getLinkedMissions(skill.name).map((mission) => mission ? (
                          <a key={mission.id} href={`#missions`} className="block p-2 hover:bg-anthracite/5 rounded transition-colors">
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded text-xs ${mission.type === "Pro" ? "bg-cyan text-white" : "bg-anthracite text-white"}`}>
                                {mission.type}
                              </span>
                              <span className="font-medium text-anthracite text-sm">{mission.title}</span>
                            </div>
                            <div className="text-xs text-anthracite/60 mt-1">{mission.year}</div>
                          </a>
                        ) : null)}
                        {getLinkedExperiences(skill.name).map((exp, idx) => exp ? (
                          <a key={idx} href={`#parcours`} className="block p-2 hover:bg-anthracite/5 rounded transition-colors">
                            <div className="font-medium text-anthracite text-sm">{exp.title}</div>
                            <div className="text-xs text-anthracite/60 mt-1">{exp.year} · {exp.company}</div>
                          </a>
                        ) : null)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-barlow font-semibold text-xl text-anthracite mb-6 tracking-wide">
              TYPES DE MISSIONS
            </h3>
            <div className="space-y-3">
              {content.skills.missionTypes.map((type, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-anthracite/10 hover:border-cyan/30 transition-colors flex items-center gap-3">
                  <div className="w-6 h-6 text-cyan/50 flex-shrink-0">{getSkillIcon(type)}</div>
                  <div className="font-medium text-anthracite">{type}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-barlow font-semibold text-xl text-anthracite mb-6 tracking-wide">
              LANGUES
            </h3>
            <div className="space-y-3">
              {content.skills.languages.map((lang, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-anthracite/10 hover:border-cyan/30 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-anthracite">{lang.name}</span>
                    <span className="text-sm text-cyan font-medium">{lang.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
