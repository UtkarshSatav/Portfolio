"use client";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Scanalytics",
        subtitle: "AI-Powered Medical Analytics Platform (Mumbai Hacks GenAI Hackathon)",
        points: [
            "Built an end-to-end web platform that processes medical scans in real time and generates AI-assisted insights to support faster and more reliable clinical decision-making.",
            "Implemented modules for automated scan upload, AI-driven analysis, and intuitive result visualization, enabling doctors to view critical findings, risk flags, and patient history in a single dashboard.",
            "Designed a clean, responsive UI tailored for hospital workflows, reducing cognitive load for clinicians and improving the usability of complex medical data."
        ],
        link: "https://github.com/UtkarshSatav/Mumbai-Hacaks-2025/tree/frontend",
        image: "/Scanalytics.jpeg",
        tags: ["React", "AI", "Real-time"]
    },
    {
        title: "FliqAI",
        subtitle: "AI-Powered College Admissions Playbooks",
        points: [
            "Built a web platform that analyzes patterns from successful college applications to generate personalized, step-by-step admissions roadmaps for each student.",
            "Implemented features for comparing a student's profile against past admits, highlighting gaps in academics, activities, and essays, and suggesting actionable improvements.",
            "Designed an intuitive, student-friendly interface that makes complex admissions data easy to understand through clear visuals, progress tracking, and tailored recommendations."
        ],
        link: "https://www.fliqai.co/",
        image: "/FliqAi.png",
        tags: ["Next.js", "Analytics", "EdTech"]
    },
    {
        title: "AXM",
        subtitle: "Client E-commerce Website",
        points: [
            "Developed a fully responsive e-commerce website for a client, enabling users to browse products, view details, and place orders through a streamlined, mobile-friendly interface.",
            "Implemented core commerce flows including product listing, filtering, cart management, and order flow, ensuring a smooth and intuitive shopping experience.",
            "Designed a clean, brand-aligned UI that highlights products and key CTAs, improving usability and helping the client better showcase their catalog online."
        ],
        link: "https://axmv0.netlify.app/",
        image: "/AXM.png",
        tags: ["E-commerce", "Responsive", "UI/UX"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl font-bold tracking-tight">Selected Projects</h3>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </motion.div>

                    <div className="flex flex-col gap-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className={`flex flex-col gap-8 lg:gap-16 items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Image Section */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="relative aspect-video overflow-hidden rounded-xl border border-border shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Decorative elements */}
                                    <div className={`absolute -z-10 top-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} w-full h-full rounded-xl border-2 border-primary/20 hidden lg:block`} />
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="text-3xl font-bold tracking-tight">{project.title}</h4>
                                        <p className="text-lg text-primary font-medium">{project.subtitle}</p>
                                    </div>

                                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                                        {project.points.map((point, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4">
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                                        >
                                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
