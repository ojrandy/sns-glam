import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "./booking";
import { Curve, Reveal } from "./editorial";
import { gallery, galleryCategories, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import heroImage from "@/assets/makeup-editorial.jpg";
import bookingImage from "@/assets/hair-editorial.jpg";

const PAGE_SIZE = 9;
// Bento rhythm on desktop (12-col grid): wide/narrow/narrow, narrow/wide/narrow, wide-ish/narrow/mid.
const LG_SPANS = [
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-4",
];
const WIDE = new Set([0, 4, 6]);
const labelFor = (id: GalleryCategory) => galleryCategories.find((c) => c.id === id)!.label;
const srcSetFor = (g: GalleryItem) =>
  g.src === g.full ? undefined : `${g.src} 640w, ${g.full} 1280w`;

export function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null);
  const items = filter === "all" ? gallery : gallery.filter((g) => g.category === filter);

  const choose = (next: GalleryCategory | "all") => {
    setFilter(next);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <Hero />
      <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="font-script text-4xl leading-none text-rose sm:text-5xl">
              Explore Our Gallery
            </p>
            <h2 className="mt-1 font-display text-4xl uppercase tracking-[.06em] text-burgundy sm:text-5xl">
              Categories
            </h2>
          </Reveal>
          <div
            className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
            role="group"
            aria-label="Filter gallery"
          >
            {[{ id: "all" as const, label: "All" }, ...galleryCategories].map((c) => (
              <button
                key={c.id}
                onClick={() => choose(c.id)}
                aria-pressed={filter === c.id}
                className={`h-10 rounded-full border px-5 text-xs font-medium tracking-[.04em] transition sm:h-11 sm:px-7 sm:text-[13px] ${filter === c.id ? "rose-gradient border-transparent text-cream shadow-[0_10px_24px_-12px_oklch(0.45_0.09_18)]" : "border-rose/45 text-burgundy hover:border-rose hover:bg-blush"}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:gap-4 lg:auto-rows-[300px] lg:grid-cols-12">
            {items.slice(0, visible).map((g, i) => (
              <Tile key={`${filter}-${g.src}`} item={g} index={i} onOpen={() => setActive(i)} />
            ))}
          </div>

          {visible < items.length && (
            <div className="mt-12 flex flex-col items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="h-11 rounded-full border-burgundy/40 bg-transparent px-9 text-xs uppercase tracking-[.18em] text-burgundy hover:bg-burgundy hover:text-cream"
              >
                Load More Photos <ArrowRight />
              </Button>
              <p className="text-xs text-muted-foreground">
                Showing {visible} of {items.length}
              </p>
            </div>
          )}
        </div>
      </section>
      <BookingSection />
      <AnimatePresence>
        {active !== null && (
          <Lightbox
            items={items}
            index={active}
            onIndex={setActive}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-wine text-cream">
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
        <img
          src={heroImage}
          alt="Soft glam portrait by SnS Glams"
          width={1200}
          height={1600}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[center_22%] opacity-60 md:opacity-100 md:[mask-image:linear-gradient(to_right,transparent,black_38%)]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-wine via-wine/80 to-wine/30 md:hidden" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,oklch(0.35_0.1_22/.55),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-5 pb-24 pt-32 sm:min-h-[640px] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[.3em] text-cream/85">
            Our Gallery <span className="h-px w-14 bg-petal/70" />
          </p>
          <p className="mt-4 font-script text-4xl text-petal sm:text-5xl">
            Real People. Real Moments.
          </p>
          <h1 className="mt-1 font-display text-5xl uppercase leading-[.98] tracking-[.02em] sm:text-6xl lg:text-7xl">
            Beauty in Every Detail.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-cream/80">
            From flawless makeup to stunning hair, luxurious photoshoots and creative braiding
            styles — explore a collection of our work and the beautiful people we've had the
            pleasure to serve.
          </p>
          <Button
            asChild
            className="rose-gradient mt-8 h-11 rounded-full px-8 text-xs uppercase tracking-[.18em] text-primary-foreground"
          >
            <Link to="/services">
              View Our Services <ArrowRight />
            </Link>
          </Button>
        </motion.div>
      </div>

      <p className="pointer-events-none absolute bottom-20 right-8 z-10 hidden -rotate-6 text-center font-script text-4xl leading-tight text-cream/90 lg:block xl:right-16">
        More Than
        <br />
        Just Beauty
        <Heart className="mx-auto mt-1 size-5 stroke-[1.25]" />
      </p>
      <Curve className="absolute inset-x-0 -bottom-px z-10 text-background" />
    </section>
  );
}

function Tile({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
  const slot = index % 9;
  const wide = WIDE.has(slot);
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % PAGE_SIZE) * 0.04 }}
      onClick={onOpen}
      aria-label={`View ${item.title}`}
      className={`group relative overflow-hidden rounded-2xl bg-nude/30 text-left outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 ${index % 3 === 0 ? "col-span-2" : ""} ${LG_SPANS[slot]}`}
    >
      <img
        src={item.src}
        srcSet={srcSetFor(item)}
        sizes={wide ? "(min-width:1024px) 640px, 100vw" : "(min-width:1024px) 330px, 50vw"}
        alt={item.alt}
        loading={index < 3 ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_24%] transition duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent transition duration-500 group-hover:from-ink/90" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-cream sm:p-5">
        <div className="min-w-0">
          <p className="truncate text-[9px] font-medium uppercase tracking-[.16em] sm:text-[10px] sm:tracking-[.2em] text-petal">
            {labelFor(item.category)}
          </p>
          <h3 className="mt-1 line-clamp-2 font-display text-base sm:truncate sm:text-xl leading-tight">
            {item.title}
          </h3>
        </div>
        <span className="hidden size-8 shrink-0 place-items-center rounded-full border sm:grid border-cream/60 transition group-hover:border-rose group-hover:bg-rose">
          <ArrowRight className="size-3.5" />
        </span>
      </div>
    </motion.button>
  );
}

function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: GalleryItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const { openBooking } = useBooking();
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const item = items[index];
  const go = useCallback(
    (step: number) => onIndex((index + step + items.length) % items.length),
    [index, items.length, onIndex],
  );

  useEffect(() => {
    document.body.classList.add("modal-open");
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("modal-open");
      previous?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  useEffect(() => {
    setLoaded(false);
    // Warm the neighbours so next/prev feel instant.
    for (const step of [1, -1]) {
      const next = items[(index + step + items.length) % items.length];
      if (next) new Image().src = next.full;
    }
    stripRef.current
      ?.querySelector<HTMLElement>(`[data-i="${index}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index, items]);

  if (!item) return null;
  const service = galleryCategories.find((c) => c.id === item.category)!.service;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — photo ${index + 1} of ${items.length}`}
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95 text-cream backdrop-blur-md"
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        const end = e.changedTouches[0]?.clientX;
        if (touchX.current === null || end === undefined) return;
        const dx = end - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-8">
        <p className="text-[11px] uppercase tracking-[.25em] text-cream/70">
          <span className="text-cream">{String(index + 1).padStart(2, "0")}</span> /{" "}
          {String(items.length).padStart(2, "0")}
          <span className="mx-3 text-cream/30">|</span>
          {labelFor(item.category)}
        </p>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close gallery"
          className="grid size-10 place-items-center rounded-full border border-cream/30 transition hover:bg-cream hover:text-burgundy"
        >
          <X className="size-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={item.full}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative h-full max-h-full max-w-full"
          >
            <img
              src={item.src}
              alt=""
              aria-hidden
              className="h-full max-h-full w-auto max-w-full rounded-xl object-contain"
            />
            <img
              src={item.full}
              alt={item.alt}
              onLoad={() => setLoaded(true)}
              className={`absolute inset-0 h-full w-full rounded-xl object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-cream/25 bg-ink/40 transition hover:bg-cream hover:text-burgundy sm:left-6 sm:grid"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-cream/25 bg-ink/40 transition hover:bg-cream hover:text-burgundy sm:right-6 sm:grid"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="px-4 pb-4 pt-4 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl sm:text-3xl">{item.title}</h2>
          <Button
            onClick={() => {
              onClose();
              openBooking({ service });
            }}
            className="rose-gradient h-10 rounded-full px-6 text-xs uppercase tracking-[.16em] text-primary-foreground"
          >
            Book This Look <ArrowRight />
          </Button>
        </div>
        <div
          ref={stripRef}
          className="mx-auto mt-4 flex max-w-5xl gap-2 overflow-x-auto pb-1 [scrollbar-width:none]"
        >
          {items.map((g, i) => (
            <button
              key={g.src}
              data-i={i}
              onClick={() => onIndex(i)}
              aria-label={`Show ${g.title}`}
              aria-current={i === index}
              className={`h-16 w-12 shrink-0 overflow-hidden rounded-md transition sm:h-20 sm:w-16 ${i === index ? "opacity-100 ring-2 ring-rose" : "opacity-45 hover:opacity-80"}`}
            >
              <img
                src={g.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const promises = [
  { Icon: Camera, label: "Professional Studio" },
  { Icon: ShieldCheck, label: "Secure & Comfortable" },
  { Icon: Clock, label: "Open 7 Days by Appointment" },
  { Icon: Star, label: "Quality You Can Trust" },
];

function BookingSection() {
  const { openBooking } = useBooking();
  return (
    <section className="relative overflow-hidden bg-blush">
      <Curve className="absolute inset-x-0 -top-px z-10 rotate-180 text-background" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[.85fr_1.25fr] lg:grid-cols-[.85fr_1.25fr_.8fr] lg:px-10">
        <div className="relative hidden h-[480px] self-end md:block">
          <img
            src={bookingImage}
            alt="Glossy body wave install with soft glam"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_75%,transparent),linear-gradient(to_right,black_80%,transparent)] [mask-composite:intersect]"
          />
        </div>
        <Reveal className="py-20 md:py-16">
          <p className="font-script text-4xl leading-none text-rose">
            Ready for Your Transformation?
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-[1.02] tracking-[.03em] text-burgundy sm:text-5xl">
            Book Your Appointment Today
          </h2>
          <p className="mt-4 text-muted-foreground">Let's create something beautiful, together.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              onClick={() => openBooking()}
              className="rose-gradient h-11 rounded-full px-8 text-xs uppercase tracking-[.18em] text-primary-foreground"
            >
              Book Now <ArrowRight />
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-rose/60 bg-transparent px-8 text-xs uppercase tracking-[.18em] text-burgundy hover:bg-burgundy hover:text-cream"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </Reveal>
        <ul className="grid gap-6 pb-20 sm:grid-cols-2 md:col-span-2 lg:col-span-1 lg:grid-cols-1 lg:border-l lg:border-rose/40 lg:py-6 lg:pl-10">
          {promises.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-4 text-sm text-burgundy">
              <Icon className="size-6 shrink-0 stroke-[1.4] text-rose" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
