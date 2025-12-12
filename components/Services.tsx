"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Digital Marketing",
    "E-commerce Solutions",
    "Mobile App Development",
    "SEO & Analytics",
    "Content Creation",
    "Social Media Management",
    "Video Production",
    "3D Modeling",
    "Motion Graphics"
];

const technologies = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "TypeScript", icon: "ts" },
    { name: "Three.js", icon: "threejs" },
    { name: "GSAP", icon: "bxl bx-gsap", type: "icon" },
    { name: "Figma", icon: "figma" },
    { name: "Photoshop", icon: "ps" },
    { name: "Illustrator", icon: "ai" },
    { name: "Blender", icon: "blender" },
    { name: "After Effects", icon: "ae" },
    { name: "GraphQL", icon: "graphql" }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 max-w-2xl"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services & Tech</h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                        <p className="text-muted-foreground leading-relaxed">
                            I craft digital experiences that inspire and engage. I build for clients who care about craft, performance, and user experience.
                        </p>
                    </motion.div>

                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Services List */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold">What I Do</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-sm">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold">Technologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="hover:-translate-y-1 transition-transform cursor-pointer flex items-center justify-center p-2"
                                        title={tech.name}
                                    >
                                        {/* @ts-ignore */}
                                        {tech.type === "icon" ? (
                                            <i className={`${tech.icon} text-5xl text-foreground`} />
                                        ) : (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img
                                                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                                                alt={tech.name}
                                                className="h-12 w-12"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
