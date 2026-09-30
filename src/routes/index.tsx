import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  Flower2,
  Gem,
  Heart,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking";
import { BookButton, CTABanner, Curve, Reveal } from "@/components/editorial";
import { services, featuredPackages } from "@/data/services";
import { media } from "@/data/media";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { BeautyMotion } from "@/components/beauty-motion";

const trustItems = [
  { Icon: Gem, label: "Bridal Specialists" },
  { Icon: Sparkle, label: "Flawless Installs" },
  { Icon: Camera, label: "In-House Photo Studio" },
  { Icon: CalendarDays, label: "Open 7 Days" },
];
const marqueeWords = ["Soft Glam", "Full Glam", "Bridal", "360 Installs", "Braids", "Photoshoots"];
const valueItems = [
  { Icon: Sparkle, label: "Artistry", text: "Expert hands. Stunning results." },
  { Icon: Heart, label: "Comfort", text: "Relax. Refresh. Feel at home." },
  { Icon: Flower2, label: "Every Occasion", text: "From everyday to your biggest moments." },
];
const occasions = [
  { name: "Weddings", image: media.wedding, position: "center 25%" },
  { name: "Birthdays", image: media.birthday, position: "center 60%" },
  { name: "Anniversaries", image: media.anniversary, position: "center 35%" },
  { name: "Photoshoots", image: media.photoshoot, position: "center 15%" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SnS Glams | Luxury Hair, Makeup & Photo Studio in Maryland" },
      {
        name: "description",
        content: "Luxury makeup, hair installations, braiding and studio photography in Maryland.",
      },
      { property: "og:title", content: "SnS Glams Hair & Makeup Studio" },
      {
        property: "og:description",
        content: "Glam, hair and beautiful portraits—all under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Marquee />
      <Services />
      <About />
      <BeautyMotion />
      <Packages />
      <Occasions />
      <Gallery />
      <Reviews />
      <Blog />
      <CTABanner />
    </>
  );
}

/* ---------- Shared bits ---------- */

function Script({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-script text-3xl leading-none sm:text-4xl ${className}`}>{children}</p>;
}
function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-3xl uppercase leading-tight tracking-[.06em] sm:text-4xl lg:text-[2.6rem] ${className}`}
    >
      {children}
    </h2>
  );
}
function MoreLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex shrink-0 items-center gap-2 border-b pb-1 text-[11px] font-medium uppercase tracking-[.2em] transition ${light ? "border-cream/40 text-cream/85 hover:text-cream" : "border-rose/40 text-rose hover:text-burgundy"}`}
    >
      {children}
      <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
    </Link>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const [ref, api] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);
  const select = useCallback(() => setIndex(api?.selectedScrollSnap() || 0), [api]);
  useEffect(() => {
    if (!api) return;
    api.on("select", select);
    const timer = setInterval(() => api.scrollNext(), 7000);
    return () => {
      clearInterval(timer);
      api.off("select", select);
    };
  }, [api, select]);

  return (
    <section
      className="relative h-[88svh] min-h-[620px] max-h-[860px] overflow-hidden bg-wine text-cream"
      ref={ref}
    >
      <div className="flex h-full">
        {services.map((s, i) => (
          <div key={s.id} className="relative min-w-0 flex-[0_0_100%]">
            <img
              src={s.image}
              alt={s.name}
              width={1200}
              height={1600}
              fetchPriority={i === 0 ? "high" : "auto"}
              className={`absolute inset-y-0 right-0 h-full w-full object-cover object-[center_18%] md:w-[68%] ${i === index ? "kenburns" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wine/95 via-wine/75 to-wine/25 md:hidden" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-wine from-30% via-wine/70 via-50% to-transparent to-80% md:block" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-wine/80 to-transparent" />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 pt-16 lg:px-10">
              <div className="max-w-xl">
                <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[.3em] text-cream/85">
                  {s.name}
                  <span className="h-px w-16 bg-petal/70" />
                </p>
                <p className="mt-4 font-script text-4xl text-petal sm:text-5xl">{s.tagline}</p>
                <h1 className="mt-1 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                  {s.headline}
                </h1>
                <p className="mt-5 max-w-md text-base text-cream/80">{s.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BookButton
                    service={s.id}
                    label={
                      <>
                        Book {s.shortName} <ArrowRight />
                      </>
                    }
                    className="h-11 px-7 text-xs uppercase tracking-[.18em]"
                  />
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-cream/60 bg-transparent px-7 text-xs uppercase tracking-[.18em] text-cream hover:bg-cream hover:text-burgundy"
                  >
                    <Link to={s.href}>Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-8 z-20 mx-auto flex max-w-7xl items-end justify-between px-5 lg:px-10">
        <div className="flex gap-5">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Show ${s.name}`}
              className={`w-10 text-left text-xs transition ${i === index ? "text-cream" : "text-cream/50 hover:text-cream/80"}`}
            >
              0{i + 1}
              <span
                className={`mt-2 block h-0.5 rounded-full transition-all ${i === index ? "w-10 bg-petal" : "w-5 bg-cream/30"}`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            size="icon"
            variant="outline"
            aria-label="Previous slide"
            className="size-11 rounded-full border-cream/50 bg-transparent text-cream hover:bg-cream hover:text-burgundy"
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft />
          </Button>
          <Button
            size="icon"
            variant="outline"
            aria-label="Next slide"
            className="size-11 rounded-full border-cream/50 bg-transparent text-cream hover:bg-cream hover:text-burgundy"
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust bar + marquee ---------- */

function Trust() {
  return (
    <section className="border-t border-petal/15 bg-wine px-5 text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {trustItems.map(({ Icon, label }, i) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-4 py-6 text-[11px] uppercase tracking-[.2em] ${i % 2 ? "border-l border-cream/15" : ""} ${i === 2 ? "lg:border-l" : ""} ${i > 1 ? "border-t border-cream/15 lg:border-t-0" : ""}`}
          >
            <Icon className="size-7 shrink-0 stroke-[1.2] text-petal" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const row = marqueeWords.map((word, i) => (
    <span key={word} className="flex items-center">
      <span className={i % 2 ? "text-rose/55" : "text-burgundy"}>{word}</span>
      <span className="mx-6 text-lg text-rose/70 sm:mx-8">✦</span>
    </span>
  ));
  return (
    <div
      className="overflow-hidden border-b border-rose/20 bg-cream py-5 font-display text-3xl uppercase tracking-[.05em] sm:text-4xl"
      aria-label={marqueeWords.join(", ")}
    >
      <div className="marquee-track flex w-max whitespace-nowrap" aria-hidden>
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </div>
    </div>
  );
}

/* ---------- Services ---------- */

function Services() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center text-burgundy">
          <Script className="text-rose">Crafted for you</Script>
          <Title>Our Services</Title>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {services.map((s) => {
            const price = s.packages[0]?.price;
            return (
              <Reveal key={s.id}>
                <Link to={s.href} className="group block text-center">
                  <div className="rose-ring mx-auto aspect-square w-full max-w-[210px] rounded-full p-[5px] transition duration-500 group-hover:glow">
                    <div className="h-full w-full overflow-hidden rounded-full border-4 border-cream">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        width={1200}
                        height={1600}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg uppercase tracking-[.14em] text-burgundy">
                    {s.name}
                  </h3>
                  <p className="font-display text-base italic text-rose">
                    — {price ? `from $${price}` : "quote on request"}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  const frame =
    "absolute overflow-hidden rounded-xl border-4 border-cream shadow-[0_20px_45px_-15px_rgba(60,15,20,.45)]";
  return (
    <section className="relative bg-blush">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-20 md:grid-cols-[1.05fr_1fr] lg:px-10">
        <Reveal className="relative mx-auto h-[330px] w-full max-w-[560px] sm:h-[400px]">
          <div className={`${frame} left-0 top-8 h-[72%] w-[38%] -rotate-6`}>
            <img
              src={media.makeupArtist}
              alt="Makeup artist at work"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className={`${frame} left-[29%] top-2 z-10 h-[76%] w-[40%] rotate-2`}>
            <img
              src={media.photoStudio}
              alt="SnS Glams photo studio"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className={`${frame} right-0 top-10 z-20 h-[80%] w-[36%] rotate-[5deg]`}>
            <img
              src={media.plumWaves}
              alt="Finished glam look"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal>
          <Script className="text-rose">Welcome to SnS Glams</Script>
          <h2 className="mt-1 font-display text-4xl leading-tight text-burgundy xl:text-[2.75rem]">
            Where Glam Feels Like Home
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            At SnS Glams, we believe beauty is more than how you look — it's how you feel. Our
            luxury studio offers premium hair, makeup, photography and braiding services, designed
            to bring out your unique glow in a comfortable, elegant and welcoming space.
          </p>
          <div className="mt-8 grid max-w-lg grid-cols-3">
            {valueItems.map(({ Icon, label, text }, i) => (
              <div key={label} className={`px-3 text-center ${i ? "border-l border-rose/30" : ""}`}>
                <Icon className="mx-auto size-7 stroke-[1.2] text-rose" />
                <h3 className="mt-2 font-display text-lg text-burgundy">{label}</h3>
                <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-8 h-9 rounded-full border-rose/60 bg-transparent px-6 text-[11px] uppercase tracking-[.2em] text-burgundy hover:bg-burgundy hover:text-cream"
          >
            <Link to="/about">
              Our Story <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
      <Curve className="text-nude" />
    </section>
  );
}

/* ---------- Packages ---------- */

function Packages() {
  const { openBooking } = useBooking();
  return (
    <section className="relative bg-nude">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-6 text-cream">
            <Title>Signature Packages</Title>
            <span className="hidden h-px w-24 bg-cream/60 sm:block" />
          </div>
          <MoreLink to="/services" light>
            View all packages
          </MoreLink>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {featuredPackages.map((p) => (
            <Reveal key={p.name} className="h-full">
              <article
                className={`group relative flex h-full flex-col rounded-xl bg-cream p-2 shadow-[0_18px_40px_-20px_rgba(60,15,20,.5)] ${p.badge ? "glow" : ""}`}
              >
                {p.badge && (
                  <span className="rose-gradient absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[.2em] text-cream shadow">
                    {p.badge}
                  </span>
                )}
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_20%] transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center px-3 pb-3 pt-4 text-center">
                  <h3 className="font-display text-xl text-burgundy">{p.title}</h3>
                  <p className="font-display text-lg text-burgundy/80">${p.price}</p>
                  <button
                    onClick={() => openBooking({ service: p.service, package: p.name })}
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[.2em] text-rose transition hover:text-burgundy"
                  >
                    Book <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <Curve className="text-wine" />
    </section>
  );
}

/* ---------- Occasions ---------- */

function Occasions() {
  return (
    <section className="grain relative bg-wine text-cream">
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-8 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Script className="text-petal">For every moment</Script>
            <Title className="mt-1">Weddings, Birthdays &amp; Everything Between</Title>
          </div>
          <MoreLink to="/bookings" light>
            Book your occasion
          </MoreLink>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {occasions.map((o) => (
            <Reveal key={o.name}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-[5/4]">
                <img
                  src={o.image}
                  alt={o.name}
                  loading="lazy"
                  style={{ objectPosition: o.position }}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/85 via-wine/10 to-transparent" />
                <div className="absolute inset-2 rounded-md border border-cream/35" />
                <h3 className="absolute inset-x-0 bottom-5 text-center font-display text-xl sm:text-2xl">
                  {o.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Curve className="relative z-10 text-background" />
    </section>
  );
}

/* ---------- Gallery ---------- */

function Gallery() {
  const img = (src: string, alt: string, extra = "") => (
    <div className={`group overflow-hidden rounded-lg ${extra}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-[center_25%] transition duration-700 group-hover:scale-105"
      />
    </div>
  );
  return (
    <section className="pb-16 pt-6">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="relative mb-10 flex flex-col items-center gap-4 md:block">
          <Title className="text-center text-burgundy">The Glam Gallery</Title>
          <div className="md:absolute md:bottom-2 md:right-0">
            <MoreLink to="/gallery">View full gallery</MoreLink>
          </div>
        </div>
        <Reveal className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:h-[280px] md:auto-rows-auto md:grid-cols-[1.3fr_.7fr_1.3fr_1fr_1.1fr] md:grid-rows-1">
          {img(media.lashCloseUp, "Soft glam close-up")}
          {img(media.braids, "Regal box braids")}
          {img(media.curlsGlam, "Full glam with curly install", "col-span-2 md:col-span-1")}
          <div className="grid gap-3 md:grid-rows-2">
            {img(media.honeyBob, "Honey blonde bob and bronze glam")}
            {img(media.goldenWaves, "Golden brown waves", "hidden md:block")}
          </div>
          {img(media.deepPlum, "Deep plum waves")}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */

function Reviews() {
  const pill =
    "h-10 rounded-full border-burgundy/40 bg-transparent px-6 text-[11px] uppercase tracking-[.16em] text-burgundy hover:bg-burgundy hover:text-cream";
  return (
    <section className="bg-blush">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 lg:px-10">
        <Reveal>
          <Script className="text-rose">Loved your glam?</Script>
          <h2 className="mt-2 max-w-sm font-display text-4xl leading-[1.05] text-burgundy sm:text-5xl">
            We'd love to hear about it.
          </h2>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Your feedback helps us grow and lets others find their perfect glam experience.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="outline" className={pill}>
              <a href={site.socials.facebook} target="_blank" rel="noreferrer">
                Review on Facebook <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" className={pill}>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer">
                Review on Instagram <ArrowRight />
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal className="h-[300px] overflow-hidden rounded-xl sm:h-[360px]">
          <img
            src={media.softWaves}
            alt="Happy SnS Glams client"
            loading="lazy"
            className="h-full w-full object-cover object-[center_68%]"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Blog ---------- */

function Blog() {
  return (
    <section className="pb-20 pt-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-5 text-burgundy">
            <h2 className="font-display text-2xl uppercase tracking-[.08em] sm:text-3xl">
              Beauty Notes
            </h2>
            <span className="hidden h-px w-20 bg-rose/50 sm:block" />
          </div>
          <MoreLink to="/blog">View all posts</MoreLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Reveal key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block h-full overflow-hidden rounded-xl border border-rose/25 bg-card transition hover:shadow-[0_16px_40px_-20px_rgba(60,15,20,.4)]"
              >
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    src={p.cover}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_30%] transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="rose-gradient inline-block rounded-full px-3 py-0.5 text-[10px] uppercase tracking-[.16em] text-cream">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-burgundy group-hover:text-rose">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {p.date} · {p.readTime}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
