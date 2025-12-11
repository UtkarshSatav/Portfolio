"use client";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-12 lg:flex-row lg:gap-24"
                >
                    {/* Left Column: Bio */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                            <div className="h-1 w-20 bg-primary rounded-full" />
                        </div>

                        <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                            <p>
                                I'm a passionate Full Stack Developer based in India, with a deep love for creating beautiful, functional, and user-centered digital experiences. With a background in Computer Science, I bring both technical expertise and creative problem-solving to every project.
                            </p>
                            <p>
                                My journey started with a curiosity about how things work on the web, which quickly turned into a career building scalable applications. I thrive in collaborative environments and am always eager to learn new technologies to stay ahead of the curve.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/Utakrsh-Satav-CV.pdf"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download CV
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex-1 space-y-12">
                        {/* Journey */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold">My Journey</h3>
                            <ul className="space-y-4">
                                {[
                                    "Started coding in 2022",
                                    "Transitioned to Web Development in 2024",
                                    "Built 50+ Projects",
                                    "Worked with Startups",
                                    "Contributed to Open Source"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React.js", "Next.js", "Node.js", "TypeScript",
                                    "MongoDB", "PostgreSQL", "GraphQL", "Tailwind CSS",
                                    "Redux", "Express", "Docker", "AWS"
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
