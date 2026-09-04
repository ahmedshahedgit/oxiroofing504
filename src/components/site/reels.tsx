import { motion } from "motion/react";
import { Play } from "lucide-react";
import { SectionHeading } from "./motion-primitives";

/**
 * REELS — exactly 3 empty video slots.
 * To add a Facebook Reel later, drop the embed/video inside the slot:
 *   <iframe src="https://www.facebook.com/plugins/video.php?href=REEL_URL" … />
 *   or <video src="/reel-01.mp4" controls playsInline className="size-full object-cover" />
 */
const SLOTS = [
  { label: "Reel 01", delay: 0 },
  { label: "Reel 02", delay: 0.14 },
  { label: "Reel 03", delay: 0.28 },
];

export function Reels() {
  return (
    <section id="reels" className="relative border-t border-border py-24 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 size-[32rem] rounded-full bg-aubergine/50 blur-[150px]" />
      <div className="relative mx-auto w-full max-w-[110rem] px-6 sm:px-10">
        <SectionHeading
          eyebrow="05 — Reels"
          title={<>On the roof, on camera</>}
          intro="Three reserved slots for Facebook Reels. Send the video links and they drop straight in."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SLOTS.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.05, delay: s.delay, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-sm border border-border bg-card/60 transition-transform duration-700 hover:-translate-y-2"
            >
              <div className="relative flex aspect-[9/16] items-center justify-center bg-cinematic">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="size-full bg-veil" />
                </div>
                <div className="absolute inset-4 rounded-sm border border-border/70" />

                <div className="relative flex flex-col items-center gap-5">
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    className="flex size-16 items-center justify-center rounded-full border border-primary/60 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Play className="size-5 translate-x-px" />
                  </motion.span>
                  <span className="eyebrow">{s.label}</span>
                  <span className="text-[0.65rem] tracking-[0.24em] uppercase text-muted-foreground/60">
                    Video Placeholder
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
