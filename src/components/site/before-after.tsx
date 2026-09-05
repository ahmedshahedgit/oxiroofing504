import { motion, useMotionValue, useTransform, useReducedMotion } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { ImageMask, Reveal, SectionHeading } from "./motion-primitives";

export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const pct = useMotionValue(50);
  const [dragging, setDragging] = useState(false);
  const clip = useTransform(pct, (p) => `inset(0 ${100 - p}% 0 0)`);
  const left = useTransform(pct, (p) => `${p}%`);

  const move = useCallback(
    (clientX: number) => {
      const el = frameRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      pct.set(Math.min(98, Math.max(2, next)));
    },
    [pct],
  );

  return (
    <section className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[110rem] px-6 sm:px-10">
        <SectionHeading
          eyebrow="04 — Transformation"
          title={
            <>
              Before <span className="text-primary">/</span> After
            </>
          }
          intro="Drag the divider to reveal the transformation. Placeholder imagery for now."
        />

        <ImageMask delay={0.1} className="mt-14 rounded-sm shadow-arch">
          <div
            ref={frameRef}
            role="slider"
            aria-label="Compare before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pct.get())}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.preventDefault();
                const step = e.key === "ArrowLeft" ? -4 : 4;
                pct.set(Math.min(98, Math.max(2, pct.get() + step)));
              }
            }}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              setDragging(true);
              move(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging) move(e.clientX);
            }}
            onPointerUp={(e) => {
              e.currentTarget.releasePointerCapture(e.pointerId);
              setDragging(false);
            }}
            onPointerCancel={() => setDragging(false)}
            className="relative aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden outline-none"
          >
            <img
              src={afterImg}
              alt="Roof after"
              loading="lazy"
              draggable={false}
              className="pointer-events-none absolute inset-0 size-full object-cover"
            />
            <motion.img
              style={{ clipPath: clip }}
              src={beforeImg}
              alt="Roof before"
              loading="lazy"
              draggable={false}
              className="pointer-events-none absolute inset-0 size-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-veil opacity-60" />

            <motion.div
              style={{ left }}
              className="pointer-events-none absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-ivory/80"
            >
              <motion.div
                animate={reduced ? {} : { scale: dragging ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/40 bg-background/70 backdrop-blur-sm"
              >
                <MoveHorizontal className="size-5 text-foreground" />
              </motion.div>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="eyebrow absolute top-6 left-6 rounded-full border border-border bg-background/60 px-4 py-2 backdrop-blur-sm"
            >
              Before
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="eyebrow absolute top-6 right-6 rounded-full border border-primary/50 bg-background/60 px-4 py-2 text-primary backdrop-blur-sm"
            >
              After
            </motion.span>
          </div>
        </ImageMask>

        <Reveal delay={0.2}>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Drag to compare
          </p>
        </Reveal>
      </div>
    </section>
  );
}
