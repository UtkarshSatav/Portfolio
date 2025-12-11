"use client";
import Link from "next/link";
import { ArrowUpRight, Github, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experience = [
    {
        company: "Atrey.dev",
        role: "Full-Stack Developer | Remote",
        period: "Jan 2025 - Present",
        points: [
            "Delivered 5-7 full-stack web projects for Atrey.dev clients, covering landing pages, dashboards, and internal tools end to end",
            "Built responsive frontends using React/Next.js and modern UI libraries, ensuring mobile-friendly layouts and consistent design implementation from Figma",
            "Implemented and integrated REST/GraphQL APIs on Node.js/Express, handling database design and queries with MongoDB/PostgreSQL for production features"
        ]
    },
    {
        company: "Fliq AI",
        role: "Frontend Developer | Remote",
        period: "MAR-2025 - SEP-2025",
        points: [
            "Built responsive UI components for Fliq AI's web app using React, TypeScript, and Tailwind CSS, improving mobile usability and layout consistency",
            "Collaborated with designers and backend engineers to implement new product flows, reducing UI bugs and handoff issues through clear Figma-to-code processes",
            "Optimized page load and bundle size by refactoring components and cleaning unused styles, leading to faster navigation and smoother user experience"
        ]
    }
];

export default function Work() {
    return (
        <section id="work" className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col gap-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 max-w-2xl"
                    >
                        <h2 className="text-3xl font-bold flex items-center gap-2 tracking-tighter sm:text-4xl md:text-5xl">
                            <Briefcase className="h-10 w-10 text-primary" />
                            Work Experience
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                        <p className="text-muted-foreground leading-relaxed">
                            A curated selection of projects I’ve brought to life — from launched websites and innovative digital tools to creative collaborations with talented teams.
                        </p>
                    </motion.div>

                    {/* Work Experience */}
                    <div className="space-y-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center mb-6">
                                        <div>
                                            <h4 className="text-2xl font-bold">{job.company}</h4>
                                            <p className="text-base text-primary font-medium">{job.role}</p>
                                        </div>
                                        <span className="text-sm text-secondary-foreground bg-secondary px-4 py-1.5 rounded-full w-fit font-medium">
                                            {job.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-3 text-muted-foreground text-sm list-disc pl-4 leading-relaxed">
                                        {job.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
