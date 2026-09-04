import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { ImageMask, Reveal, SectionHeading } from "./motion-primitives";

function ProjectCard({
  img,
  index,
  title,
  meta,
  aspect,
  delay = 0,
}: {
  img: string;
  index: string;
  title: string;
  meta: string;
  aspect: string;
  delay?: number;
}) {
  return (
    <div className="group">
      <ImageMask delay={delay} className="rounded-sm shadow-arch">
        <div className={`relative overflow-hidden ${aspect}`}>
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-cinematic opacity-0 transition-opacity duration-700 group-hover:opacity-30" />
        </div>
      </ImageMask>
      <Reveal delay={delay + 0.15}>
        <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
          <div>
            <span className="eyebrow">{index}</span>
            <h3 className="display mt-2 text-2xl sm:text-3xl">{title}</h3>
          </div>
          <span className="text-xs tracking-[0.16em] uppercase text-muted-foreground">{meta}</span>
        </div>
      </Reveal>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["4%", reduced ? "4%" : "-6%"]);

  return (
    <section id="projects" ref={ref} className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[110rem] px-6 sm:px-10">
        <SectionHeading
          eyebrow="03 — Recent Projects"
          title={
            <>
              Work in <span className="text-primary">place</span>
            </>
          }
          intro="Placeholder projects, ready to be swapped for real photography and project names."
        />

        <div className="mt-16">
          <ProjectCard
            img={project1}
            index="Project 01"
            title="Placeholder Project — Cleveland"
            meta="Roof System"
            aspect="aspect-[16/9]"
          />
        </div>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <motion.div style={{ y: drift }} className="lg:col-span-5 lg:-mt-16">
            <ProjectCard
              img={project2}
              index="Project 02"
              title="Placeholder Project — Orleans Parish"
              meta="Replacement"
              aspect="aspect-[4/5]"
              delay={0.05}
            />
          </motion.div>
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
            <ProjectCard
              img={project3}
              index="Project 03"
              title="Placeholder Project — Metairie"
              meta="Detailing"
              aspect="aspect-[4/3]"
              delay={0.12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
