import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading, staggerChild, staggerParent } from "./motion-primitives";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

const CAPABILITIES = [
  {
    n: "01",
    title: "Residential Roofing",
    copy: "Full roof systems for houses — carefully planned, cleanly executed.",
    img: afterImg,
  },
  {
    n: "02",
    title: "Roof Replacement",
    copy: "Tear-off and rebuild for roofs that have reached the end of their life.",
    img: beforeImg,
  },
  {
    n: "03",
    title: "Repairs & Detailing",
    copy: "Targeted work on flashing, ridges, valleys and problem areas.",
    img: project3,
  },
  {
    n: "04",
    title: "Inspections & Estimates",
    copy: "A close look at the roof, then a clear plan for the work ahead.",
    img: project1,
  },
];

export function Capabilities() {
  return (
    <section id="roofing" className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[110rem] px-6 sm:px-10">
        <SectionHeading
          eyebrow="02 — Capabilities"
          title={<>What we build</>}
          intro="Editable capability cards. Tell us the exact services you offer and the wording can be tuned to match."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12%" }}
          className="mt-16 grid gap-5 sm:grid-cols-2"
        >
          {CAPABILITIES.map((c) => (
            <motion.article
              key={c.n}
              variants={staggerChild}
              className="group relative overflow-hidden rounded-sm border border-border transition-transform duration-700 hover:-translate-y-2"
            >
              <div className="absolute inset-0">
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover opacity-45 transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-veil" />
                <div className="absolute inset-0 bg-cinematic opacity-0 transition-opacity duration-700 group-hover:opacity-45" />
              </div>

              <div className="relative flex min-h-[22rem] flex-col justify-between p-7 sm:min-h-[26rem] sm:p-10">
                <span className="eyebrow">{c.n}</span>
                <div>
                  <h3 className="display text-3xl sm:text-[2.6rem]">{c.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {c.copy}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-primary">
                    Enquire
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
