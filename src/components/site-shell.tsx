import { useCallback, useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import { CalendarHeart, ChevronDown, Clock, Navigation, Instagram, Facebook, Mail, MapPin, Menu, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingProvider, useBooking } from "./booking";
import { FloatingWhatsApp, WhatsAppIcon, whatsappUrl } from "./whatsapp";
import { services } from "@/data/services";
import { site } from "@/data/site";
import logo from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";

export function AppShell({ children }: { children: React.ReactNode }) {
 const pathname=useRouterState({select:s=>s.location.pathname}); const reduce=useReducedMotion();
 useEffect(()=>{if(reduce)return;const lenis=new Lenis({duration:1.15,smoothWheel:true});let id=0;const raf=(t:number)=>{lenis.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>{cancelAnimationFrame(id);lenis.destroy()}},[reduce]);
 useEffect(()=>{window.scrollTo(0,0)},[pathname]);
 return <BookingProvider><Header/><AnimatePresence mode="wait"><motion.main key={pathname} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.35}}>{children}</motion.main></AnimatePresence><Footer/><FloatingWhatsApp/></BookingProvider>
}
const navLinks: readonly [SitePath, string][] = [["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/gallery", "Gallery"], ["/reviews", "Reviews"], ["/blog", "Blog"], ["/contact", "Contact"]];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { openBooking } = useBooking();
  useEffect(() => { const fn = () => setScrolled(scrollY > 30); fn(); addEventListener("scroll", fn, { passive: true }); return () => removeEventListener("scroll", fn); }, []);
  useEffect(() => setOpen(false), [path]);
  const close = useCallback(() => setOpen(false), []);
  const overlay = (path === "/" || path === "/gallery") && !scrolled;
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${overlay ? "bg-transparent text-cream" : "bg-cream/95 text-burgundy shadow-[0_6px_24px_-12px_rgba(60,15,20,.35)] backdrop-blur-lg"}`}>
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-10 ${overlay ? "h-[72px] sm:h-24" : "h-16 sm:h-20"}`}>
          <Brand light={overlay} className={overlay ? "h-12 sm:h-16" : "h-10 sm:h-14"} />
          <nav className="hidden items-center gap-6 text-[12px] uppercase lg:flex xl:gap-8" aria-label="Main">
            {navLinks.map(([to, label]) => to === "/services" ? (
              <div key={to} className="group relative">
                <Link to="/services" activeProps={{ className: "text-rose" }} className="flex items-center gap-1 py-8 tracking-[.12em] transition hover:text-rose">Services <ChevronDown className="size-3 transition group-hover:rotate-180" /></Link>
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 rounded-xl border border-rose/20 bg-cream p-2 text-burgundy opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {services.map((s) => <Link key={s.id} to={s.href} className="block rounded-lg px-4 py-3 text-[12px] tracking-[.1em] hover:bg-blush">{s.name}</Link>)}
                </div>
              </div>
            ) : <NavLink key={to} to={to}>{label}</NavLink>)}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button onClick={() => openBooking()} className="rose-gradient h-9 rounded-full px-4 text-[11px] uppercase tracking-[.14em] text-primary-foreground shadow-md sm:h-11 sm:px-7 sm:text-xs">Book Now</Button>
            <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className={`grid size-10 place-items-center rounded-full border transition lg:hidden ${overlay ? "border-cream/40 hover:bg-cream/10" : "border-burgundy/25 hover:bg-blush"}`}><Menu className="size-5" /></button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} path={path} onClose={close} onBook={() => { setOpen(false); openBooking(); }} />
    </>
  );
}

function MobileMenu({ open, path, onClose, onBook }: { open: boolean; path: string; onClose: () => void; onBook: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(path.startsWith("/services"));
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("modal-open");
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("modal-open"); window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);
  const isActive = (to: string) => (to === "/" ? path === "/" : path.startsWith(to));
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <motion.div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.div data-lenis-prevent className="absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-wine text-cream shadow-2xl sm:max-w-md" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-cream/10 px-5 sm:h-24 sm:px-8">
              <Brand light className="h-12 sm:h-14" />
              <button onClick={onClose} aria-label="Close menu" className="grid size-10 place-items-center rounded-full border border-cream/30 transition hover:bg-cream/10"><X className="size-5" /></button>
            </div>
            <nav className="flex-1 px-5 py-6 sm:px-8" aria-label="Mobile">
              <p className="mb-3 font-script text-3xl text-petal">Where glam feels like home</p>
              <ul>
                {navLinks.map(([to, label], i) => (
                  <motion.li key={to} className="border-b border-cream/10" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.04 }}>
                    <div className="flex items-center">
                      <Link to={to} className={`flex flex-1 items-baseline gap-4 py-3.5 font-display text-[1.7rem] leading-none transition hover:text-petal ${isActive(to) ? "text-petal" : ""}`}>
                        <span className="w-6 font-sans text-[11px] tracking-[.15em] text-cream/40">0{i + 1}</span>{label}
                      </Link>
                      {to === "/services" && (
                        <button onClick={() => setServicesOpen((v) => !v)} aria-label="Toggle services" aria-expanded={servicesOpen} className="grid size-9 place-items-center rounded-full border border-cream/20 transition hover:bg-cream/10">
                          <ChevronDown className={`size-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {to === "/services" && servicesOpen && (
                      <div className="grid gap-1 pb-4 pl-10">
                        {services.map((s) => <Link key={s.id} to={s.href} className={`py-1.5 text-sm tracking-[.08em] transition hover:text-petal ${path === s.href ? "text-petal" : "text-cream/70"}`}>{s.name}</Link>)}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="shrink-0 space-y-5 border-t border-cream/10 px-5 py-6 sm:px-8">
              <Button onClick={onBook} className="rose-gradient h-12 w-full rounded-full text-xs uppercase tracking-[.2em] text-primary-foreground">Book Your Glam</Button>
              <div className="space-y-2 text-sm text-cream/65">
                <p className="flex gap-3"><MapPin className="size-4 shrink-0 text-petal" />{site.address}</p>
                <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-petal"><Mail className="size-4 shrink-0 text-petal" />{site.email}</a>
                {site.whatsapp.map((w) => <a key={w.number} href={whatsappUrl(w.number)} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-petal"><WhatsAppIcon className="size-4 shrink-0 text-petal" />{w.label}</a>)}
              </div>
              <Socials />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
type SitePath = "/" | "/about" | "/services" | "/gallery" | "/reviews" | "/blog" | "/contact" | "/privacy-policy" | "/disclaimer" | "/faq";
function NavLink({to,children}:{to:SitePath;children:React.ReactNode}){return <Link to={to} activeOptions={{exact:to==="/"}} activeProps={{className:"text-rose after:scale-x-100"}} className="relative py-8 tracking-[.12em] transition after:absolute after:inset-x-0 after:bottom-6 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition hover:text-rose hover:after:scale-x-100">{children}</Link>}
/** Logo image; `light` swaps to the cream version for dark backgrounds. Size it with a height class. */
export function Brand({light=false,className="h-12"}:{light?:boolean;className?:string}){return <Link to="/" aria-label={`${site.shortName} home`} className="relative z-10 block shrink-0"><img src={light?logoLight:logo} alt={site.name} width={652} height={339} className={`w-auto max-w-none object-contain transition-all duration-300 ${className}`}/></Link>}
function Socials(){const socials=[["Instagram",site.socials.instagram,<Instagram key="i" className="size-4"/>],["TikTok",site.socials.tiktok,<TikTok key="t"/>],["Facebook",site.socials.facebook,<Facebook key="f" className="size-4"/>],["YouTube",site.socials.youtube,<Youtube key="y" className="size-4"/>]] as const;return <div className="flex gap-3">{socials.map(([label,href,icon])=><a key={label} aria-label={label} href={href} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-cream/20 text-cream/80 transition hover:border-petal hover:text-petal">{icon}</a>)}</div>}
/**
 * Footer columns share one grid: every list column has a heading + 5 rows,
 * and on desktop each column is a subgrid, so row N lines up across all columns even if a row wraps.
 */
const footerQuickLinks: readonly [SitePath, string][] = [["/about", "About Us"], ["/gallery", "Gallery"], ["/reviews", "Reviews"], ["/blog", "Blog"], ["/contact", "Contact"]];
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
const footerLink = "inline-flex items-start gap-3 text-left transition hover:text-petal focus-visible:text-petal focus-visible:outline-none";
const footerIcon = "size-4 shrink-0 translate-y-0.5 text-petal";

function Footer() {
  const year = new Date().getFullYear();
  const { openBooking } = useBooking();
  const serviceLinks: readonly [SitePath, string][] = [...services.map((s) => [s.href as SitePath, s.name] as [SitePath, string]), ["/services", "All Services"]];
  return (
    <footer className="grain bg-ink px-5 pb-8 pt-16 text-cream lg:px-10 lg:pt-20">
      {/* Below lg: centered brand, Quick Links + Services side by side, then a centered Contact column */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.35fr)] lg:grid-rows-[auto_repeat(5,auto)] lg:gap-x-12 lg:gap-y-3">
        <div className="col-span-2 mx-auto max-w-sm text-center lg:col-span-1 lg:row-span-6 lg:mx-0 lg:max-w-xs lg:text-left">
          <div className="flex justify-center lg:justify-start"><Brand light className="h-16 sm:h-20" /></div>
          <p className="mt-5 text-sm leading-6 text-cream/65">Luxury hair, makeup &amp; photography for every occasion.</p>
          <div className="mt-6 flex justify-center lg:justify-start"><Socials /></div>
        </div>
        <FooterCol title="Quick Links">
          {footerQuickLinks.map(([to, label]) => <li key={to}><Link to={to} className={footerLink}>{label}</Link></li>)}
        </FooterCol>
        <FooterCol title="Services">
          {serviceLinks.map(([to, label]) => <li key={to}><Link to={to} activeOptions={{ exact: true }} className={footerLink}>{label}</Link></li>)}
        </FooterCol>
        <FooterCol title="Contact" className="col-span-2 border-t border-cream/10 pt-10 lg:col-span-1 lg:border-0 lg:pt-0">
          <li className="flex items-start gap-3"><MapPin className={footerIcon} />{site.address}</li>
          <li><a href={`mailto:${site.email}`} className={`${footerLink} [overflow-wrap:anywhere]`}><Mail className={footerIcon} />{site.email}</a></li>
          <li className="flex items-start gap-3"><WhatsAppIcon className={footerIcon} /><span className="flex flex-wrap gap-x-2">{site.whatsapp.map((w, i) => <a key={w.number} href={whatsappUrl(w.number)} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${w.label}`} className="transition hover:text-petal">{w.label}{i < site.whatsapp.length - 1 ? "," : ""}</a>)}</span></li>
          <li className="flex items-start gap-3"><Clock className={footerIcon} />{site.hours}</li>
          <li><button type="button" onClick={() => openBooking()} className={footerLink}><CalendarHeart className={footerIcon} />Book an Appointment</button></li>
        </FooterCol>
      </div>
      <div className="relative z-10 mx-auto mt-14 grid max-w-7xl gap-4 border-t border-cream/10 pt-6 text-center text-xs leading-5 text-cream/50 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
        <p className="md:text-left">© {year} {site.name}. All rights reserved.</p>
        <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link to="/privacy-policy" className="transition hover:text-petal">Privacy Policy</Link><span aria-hidden>·</span>
          <Link to="/disclaimer" className="transition hover:text-petal">Disclaimer</Link><span aria-hidden>·</span>
          <Link to="/faq" className="transition hover:text-petal">FAQs</Link><span aria-hidden>·</span>
          <a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-petal"><Navigation className="size-3.5 text-petal" />Get Directions</a>
        </nav>
        <p className="md:text-right">Powered by <a href="https://webspectron.com/" target="_blank" rel="noopener" className="font-medium text-cream/75 underline-offset-4 transition hover:text-petal hover:underline">Web Spectron</a></p>
      </div>
    </footer>
  );
}
function TikTok(){return <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.77a5.7 5.7 0 0 0-.77-.05 5.68 5.68 0 1 0 5.68 5.68V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z"/></svg>}
/** Heading + a list of 5 items; on lg both levels use subgrid to share the parent's row tracks. */
/** Below lg the column is centered; from lg it aligns left. */
function FooterCol({title,className="",children}:{title:string;className?:string;children:React.ReactNode}){
  return <div className={`grid content-start gap-y-3 text-center lg:row-span-6 lg:grid-rows-subgrid lg:text-left ${className}`}><h3 className="mb-2 text-[11px] font-medium uppercase leading-4 tracking-[.22em] text-petal">{title}</h3><ul className="grid justify-items-center gap-y-3 text-sm leading-5 text-cream/70 lg:row-span-5 lg:grid-rows-subgrid lg:justify-items-stretch">{children}</ul></div>
}
