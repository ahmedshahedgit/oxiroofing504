import { Reveal } from "./motion-primitives";
import { SOCIALS } from "./social";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[110rem] px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="display text-2xl">Oxi Roofing 504</span>
              <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Roofing Construcción
              </p>
            </div>
            <div>
              <span className="eyebrow">Service Areas</span>
              <p className="mt-4 text-sm text-muted-foreground">Cleveland, OH</p>
              <p className="text-sm text-muted-foreground">Orleans Parish, LA</p>
            </div>
            <div>
              <span className="eyebrow">Email</span>
              <a
                href="mailto:oficialoxitmc@gmail.com"
                className="link-underline mt-4 inline-block text-sm text-foreground"
              >
                oficialoxitmc@gmail.com
              </a>
            </div>
            <div>
              <span className="eyebrow">Social</span>
              <ul className="mt-4 space-y-2">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="hairline my-12" />
        <Reveal delay={0.1}>
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground/70">
            © {new Date().getFullYear()} Oxi Roofing 504
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
