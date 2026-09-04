import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import aboutImg from "@/assets/about-craft.jpg";
import { ImageMask, MaskLines, Reveal } from "./motion-primitives";

const DETAILS = [
  { k: "Service Areas", v: "Cleveland, OH · Orleans Parish, LA" },
  { k: "Based", v: "Metairie Lakefront, LA" },
  { k: "Discipline", v: "Roofing Construcción" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["6%", reduced ? "6%" : "-8%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 sm:py-36">
      <div className="pointer-events-none absolute -left-40 top-20 size-[38rem] rounded-full bg-accent/25 blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-[110rem] gap-14 px-6 sm:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">01 — The Studio</span>
          </Reveal>
          <h2 className="display mt-6 text-[clamp(2.25rem,6.5vw,5.5rem)]">
            <MaskLines>A roofing team</MaskLines>
            <MaskLines delay={0.1}>with a builder&apos;s</MaskLines>
            <MaskLines delay={0.2}>
              <span className="text-primary">precision</span>
            </MaskLines>
          </h2>

          <Reveal delay={0.3} className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              Oxi Roofing 504 is a roofing construction crew working between the Gulf and the Great
              Lakes. Every roof is treated as architecture — measured, detailed, and finished with
              care from the first tear-off to the last ridge line.
            </p>
          </Reveal>

          <div className="mt-12 max-w-xl">
            {DETAILS.map((d, i) => (
              <Reveal key={d.k} delay={0.4 + i * 0.1}>
                <div className="flex items-baseline justify-between gap-6 border-t border-border py-5">
                  <span className="eyebrow">{d.k}</span>
                  <span className="text-right text-sm text-foreground">{d.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <ImageMask className="rounded-sm shadow-arch lg:-mt-16">
            <motion.img
              style={{ y: imgY }}
              src={aboutImg}
              alt="Roofers installing shingles"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full scale-110 object-cover"
            />
          </ImageMask>
          <Reveal delay={0.5}>
            <div className="mt-6 ml-auto max-w-xs border-l border-primary/60 pl-5 lg:-mt-20 lg:mr-8 lg:bg-background/80 lg:py-6 lg:backdrop-blur-sm">
              <p className="display text-2xl leading-tight">
                Detail work you can only see from the ladder.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
