import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Roofing", href: "#roofing" },
  { label: "Projects", href: "#projects" },
  { label: "Reels", href: "#reels" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? "oklch(0.171 0.014 220.5 / 0.72)" : "transparent",
            backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
            borderBottomColor: scrolled
              ? "oklch(0.925 0.019 84.6 / 0.1)"
              : "oklch(0.925 0.019 84.6 / 0)",
            paddingTop: scrolled ? 14 : 26,
            paddingBottom: scrolled ? 14 : 26,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b"
        >
          <nav className="mx-auto flex w-full max-w-[110rem] items-center justify-between px-6 sm:px-10">
            <a href="#top" className="group flex items-baseline gap-2">
              <span className="display text-lg tracking-tight sm:text-xl">Oxi Roofing</span>
              <span className="text-[0.7rem] font-semibold tracking-[0.3em] text-primary">504</span>
            </a>

            <ul className="hidden items-center gap-10 lg:flex">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-[0.78rem] font-medium tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden rounded-full border border-border px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-primary hover:text-primary lg:inline-block"
              >
                Start a Project
              </a>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="text-foreground transition-opacity hover:opacity-70 lg:hidden"
              >
                <Menu className="size-6" />
              </button>
            </div>
          </nav>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-cinematic lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-7">
              <span className="display text-lg">Oxi Roofing 504</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-foreground"
              >
                <X className="size-6" />
              </button>
            </div>
            <ul className="mt-10 px-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-border/60 py-5"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display block text-4xl"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
