"use client";
import Link from "next/link";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 max-w-2xl"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
                        <p className="text-muted-foreground leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Link
                                href="mailto:dev.utkarshsatav@gmail.com"
                                className="flex flex-col items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group h-full"
                            >
                                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-sm text-muted-foreground">dev.utkarshsatav@gmail.com</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link
                                href="tel:+918237042287"
                                className="flex flex-col items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group h-full"
                            >
                                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-sm text-muted-foreground">+91 82370 42287</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-2 lg:col-span-1"
                        >
                            <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-border bg-card h-full">
                                <div className="p-4 rounded-full bg-primary/10 text-primary">
                                    <div className="h-6 w-6 flex items-center justify-center font-bold">@</div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold">Socials</h3>
                                    <div className="flex gap-4">
                                        <Link
                                            href="https://www.linkedin.com/in/utkarsh-satav-808432313/"
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                        <Link
                                            href="https://github.com/UtkarshSatav"
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                            <span className="sr-only">GitHub</span>
                                        </Link>
                                        <Link
                                            href="https://x.com/UtkarshSatav"
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Twitter className="h-5 w-5" />
                                            <span className="sr-only">X (Twitter)</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
