import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import ctaImg from "@/assets/after.jpg";
import { MaskLines } from "./motion-primitives";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduced ? "-8%" : "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section ref={ref} className="relative flex min-h-[85svh] items-center overflow-hidden">
      {/* Video-ready: replace this img with a <video> for the closing scene. */}
      <motion.img
        style={{ y, scale }}
        src={ctaImg}
        alt="Home with a new roof at dusk"
        width={1600}
        height={1000}
        loading="lazy"
        className="absolute inset-0 size-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-veil" />
      <div className="absolute inset-0 bg-cinematic opacity-45 mix-blend-soft-light" />

      <div className="relative mx-auto w-full max-w-[110rem] px-6 py-28 text-center sm:px-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="eyebrow"
        >
          08 — Let&apos;s Build
        </motion.span>
        <h2 className="display mx-auto mt-7 max-w-4xl text-[clamp(2.5rem,8vw,7rem)]">
          <MaskLines>Your roof deserves</MaskLines>
          <MaskLines delay={0.12}>
            a <span className="text-primary">final</span> answer
          </MaskLines>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <a
            href="mailto:oficialoxitmc@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
          >
            Start a Project
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="https://www.facebook.com/messages/t/teamrufero504/"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            Message Us
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
