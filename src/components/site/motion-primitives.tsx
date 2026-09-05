import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function useMotionOk() {
  return !useReducedMotion();
}

/** Cinematic mask reveal: content rises out of an overflow-hidden frame.
 *  The outer frame owns the viewport trigger — the inner line is clipped
 *  while offset, so it can never trigger an in-view check itself. */
export function MaskLines({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ok = useMotionOk();
  return (
    <motion.span
      className={`block overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8%" }}
    >
      <motion.span
        className="block"
        variants={{
          hidden: ok ? { y: "110%", opacity: 0 } : { opacity: 0 },
          show: {
            y: "0%",
            opacity: 1,
            transition: { duration: 1.1, delay, ease: EASE },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}


export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ok = useMotionOk();
  return (
    <motion.div
      className={className}
      initial={ok ? { opacity: 0, y } : { opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Clip-path curtain reveal for images. The outer frame owns the viewport
 *  trigger; the clipped inner layer can't report itself as visible. */
export function ImageMask({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ok = useMotionOk();
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8%" }}
    >
      <motion.div
        variants={{
          hidden: ok ? { clipPath: "inset(0 0 100% 0)" } : { opacity: 0 },
          show: {
            clipPath: ok ? "inset(0 0 0% 0)" : undefined,
            opacity: 1,
            transition: { duration: 1.3, delay, ease: EASE },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}


export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.75rem)]">
        <MaskLines delay={0.08}>{title}</MaskLines>
      </h2>
      {intro ? (
        <Reveal delay={0.25}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export { EASE, motion };
