import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Capabilities } from "@/components/site/capabilities";
import { Projects } from "@/components/site/projects";
import { BeforeAfter } from "@/components/site/before-after";
import { Reels } from "@/components/site/reels";
import { ServiceArea } from "@/components/site/service-area";
import { Social } from "@/components/site/social";
import { FinalCta } from "@/components/site/final-cta";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

const TITLE = "Oxi Roofing 504 — Roofing in Cleveland, OH & Orleans Parish, LA";
const DESC =
  "Oxi Roofing 504 is a roofing construction crew serving Cleveland, OH and Orleans Parish, LA. Roof systems, replacement, repairs and inspections.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <SiteNav />
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <BeforeAfter />
      <Reels />
      <ServiceArea />
      <Social />
      <FinalCta />
      <Contact />
      <SiteFooter />
    </main>
  );
}
