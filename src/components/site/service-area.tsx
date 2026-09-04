import { motion } from "motion/react";
import { Reveal, SectionHeading, staggerChild, staggerParent } from "./motion-primitives";

const AREAS = [
  { city: "Cleveland", region: "Ohio", coords: "41.49° N / 81.69° W" },
  { city: "Orleans Parish", region: "Louisiana", coords: "29.95° N / 90.07° W" },
];

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-36">
      {/* abstract geographic composition */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <svg className="size-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 13 }).map((_, i) => (
            <motion.line
              key={`h${i}`}
              x1="0"
              y1={i * 50}
              x2="1200"
              y2={i * 50}
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: i * 0.04 }}
            />
          ))}
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.line
              key={`v${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="600"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: i * 0.03 }}
            />
          ))}
        </svg>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-[110rem] px-6 sm:px-10">
        <SectionHeading
          eyebrow="06 — Service Areas"
          title={<>Two coasts of weather</>}
          intro="Lake-effect winters in Ohio, Gulf storms in Louisiana. Two climates, one standard of work."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12%" }}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          {AREAS.map((a) => (
            <motion.div
              key={a.city}
              variants={staggerChild}
              className="group relative overflow-hidden rounded-sm border border-border bg-card/40 p-8 backdrop-blur-sm transition-transform duration-700 hover:-translate-y-1.5 sm:p-12"
            >
              <span className="eyebrow">{a.region}</span>
              <h3 className="display mt-5 text-[clamp(2rem,5vw,3.75rem)]">{a.city}</h3>
              <div className="hairline my-8" />
              <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-muted-foreground">
                <span>{a.coords}</span>
                <span className="text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Serviced
                </span>
              </div>
              <motion.span
                aria-hidden
                className="absolute -bottom-10 -right-6 size-40 rounded-full border border-primary/25"
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-sm text-muted-foreground">
            Based at Metairie Lakefront, LA, United States.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
