import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import { MaskLines } from "./motion-primitives";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[36rem] w-full overflow-hidden">
      {/* Video-ready background layer: swap the <img> for a <video> later. */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <motion.img
          src={heroImg}
          alt="Dark architectural roofline at dusk"
          width={1920}
          height={1280}
          className="size-full object-cover"
          initial={{ scale: reduced ? 1 : 1.14, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {/*
          To use a video instead:
          <video autoPlay muted loop playsInline poster={heroImg} className="size-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        */}
      </motion.div>

      <div className="absolute inset-0 bg-veil" />
      <div className="absolute inset-0 bg-cinematic opacity-40 mix-blend-soft-light" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto flex h-full w-full max-w-[110rem] flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-24"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="eyebrow"
        >
          Oxi Roofing 504 — Roofing Construcción
        </motion.span>

        <h1 className="display mt-6 max-w-5xl text-[clamp(2.75rem,9vw,8rem)]">
          <MaskLines delay={0.6}>Roofs built</MaskLines>
          <MaskLines delay={0.74}>
            <span className="text-primary">to hold</span> the sky
          </MaskLines>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-9 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Roofing craft for homes and buildings across{" "}
            <span className="text-foreground">Cleveland, OH</span> and{" "}
            <span className="text-foreground">Orleans Parish, LA</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
            >
              Start a Project
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#social"
              className="group inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Connect With Us
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
