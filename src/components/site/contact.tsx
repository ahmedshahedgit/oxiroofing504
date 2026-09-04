import { ArrowUpRight } from "lucide-react";
import { MaskLines, Reveal } from "./motion-primitives";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-36">
      <div className="mx-auto grid w-full max-w-[110rem] gap-14 px-6 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">09 — Contact</span>
          </Reveal>
          <h2 className="display mt-6 text-[clamp(2.25rem,6vw,5rem)]">
            <MaskLines>Start a</MaskLines>
            <MaskLines delay={0.1}>
              <span className="text-primary">conversation</span>
            </MaskLines>
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Send a note about your roof — address, what you&apos;re seeing, and photos if you have
              them. Email or Messenger both reach us.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <div className="rounded-sm border border-border bg-card/40 p-8 backdrop-blur-sm sm:p-12">
              <span className="display text-3xl">Oxi Roofing 504</span>
              <div className="hairline my-8" />
              <dl className="space-y-7">
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2">
                    <a
                      href="mailto:oficialoxitmc@gmail.com"
                      className="link-underline text-lg text-foreground"
                    >
                      oficialoxitmc@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Location</dt>
                  <dd className="mt-2 text-lg text-foreground">
                    Metairie Lakefront, LA, United States
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Service Areas</dt>
                  <dd className="mt-2 text-lg text-foreground">
                    Cleveland, OH · Orleans Parish, LA
                  </dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:oficialoxitmc@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
                >
                  Email Us
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="https://www.facebook.com/messages/t/teamrufero504/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  Messenger
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
