"use client";
import { motion } from "motion/react";
import { experiences } from "../Utils/Data";

const ExperienceItem = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 pb-12 last:pb-0 group"
        >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 group-last:bottom-auto group-last:h-full">
                <div className="absolute top-2 -left-[3px] w-[7px] h-[7px] bg-neutral-900 border border-neutral-600 group-hover:border-accent group-hover:bg-accent transition-colors duration-300 transform rotate-45" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                </h3>
                <span className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0">
                    {exp.company} {"//"} {exp.period}
                </span>
            </div>

            <ul className="space-y-2">
                {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-400 pl-4 relative">
                        <span className="absolute left-0 top-2 w-1 h-1 bg-neutral-700 rounded-full" />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section className="relative w-full max-w-7xl mx-auto bg-[#050505] py-12 px-6 md:px-12 border-b border-neutral-800">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                    XP_LOGS
                </h2>
                <div className="h-px flex-1 bg-neutral-800" />
                <span className="text-[10px] font-mono text-accent">
                    Run_Time: 2Y+
                </span>
            </div>

            <div className="max-w-4xl">
                {experiences.map((exp, idx) => (
                    <ExperienceItem key={exp.id || idx} exp={exp} index={idx} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
