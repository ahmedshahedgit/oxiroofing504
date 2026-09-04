import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading, staggerChild, staggerParent } from "./motion-primitives";

export const SOCIALS = [
  {
    name: "Instagram",
    handle: "@el_oxi_504",
    href: "https://www.instagram.com/el_oxi_504/",
  },
  {
    name: "TikTok",
    handle: "@oxicapivara",
    href: "https://tiktok.com/@oxicapivara/",
  },
  {
    name: "Messenger",
    handle: "Oxi Roofing 504",
    href: "https://www.facebook.com/messages/t/teamrufero504/",
  },
];

export function Social() {
  return (
    <section id="social" className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[110rem] px-6 sm:px-10">
        <SectionHeading eyebrow="07 — Connect" title={<>Follow the work</>} />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12%" }}
          className="mt-14 border-t border-border"
        >
          {SOCIALS.map((s) => (
            <motion.a
              key={s.name}
              variants={staggerChild}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex items-center justify-between gap-6 overflow-hidden border-b border-border py-8 sm:py-11"
            >
              <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-accent/30 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <span className="display text-[clamp(1.75rem,5vw,3.5rem)] transition-transform duration-700 group-hover:translate-x-3">
                {s.name}
              </span>
              <span className="flex items-center gap-4 sm:gap-8">
                <span className="hidden text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
                  {s.handle}
                </span>
                <ArrowUpRight className="size-6 text-primary transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
