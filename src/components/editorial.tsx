import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "./booking";
import type { ServiceId } from "@/data/services";
import ctaImage from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(19).jpeg";

export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){return <motion.div className={className} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.7}}>{children}</motion.div>}

export function SectionHeading({eyebrow,script,title,light=false}:{eyebrow?:string;script?:string;title:string;light?:boolean}){return <Reveal><div className={`mb-10 ${light?"text-cream":"text-burgundy"}`}>{eyebrow&&<p className="mb-2 text-xs tracking-[.24em]">{eyebrow}</p>}{script&&<p className="font-script text-4xl text-rose">{script}</p>}<h2 className="max-w-3xl font-display text-4xl uppercase leading-[.95] sm:text-6xl">{title}</h2></div></Reveal>}

export function BookButton({service,packageName,label="Book Now",className=""}:{service?:ServiceId;packageName?:string;label?:string;className?:string}){const {openBooking}=useBooking();return <Button onClick={()=>openBooking({...service ? {service} : {}, ...packageName ? {package: packageName} : {}})} className={`rose-gradient rounded-full px-7 text-primary-foreground ${className}`}>{label}</Button>}

export function CTABanner(){const {openBooking}=useBooking();return <section className="relative min-h-[460px] overflow-hidden bg-burgundy"><img src={ctaImage} alt="Studio portrait" loading="lazy" width={1200} height={1600} className="absolute inset-0 h-full w-full object-cover object-top opacity-45"/><div className="absolute inset-0 bg-gradient-to-r from-ink via-burgundy/80 to-transparent"/><Reveal className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl flex-col items-start justify-center px-5 py-16 text-cream"><p className="font-script text-4xl text-rose">Your moment is waiting</p><h2 className="font-display text-5xl uppercase sm:text-7xl">Ready for Your Glow-Up?</h2><div className="mt-7 flex flex-wrap gap-3"><Button onClick={()=>openBooking()} className="rose-gradient rounded-full px-7 text-primary-foreground">Book Now</Button><Button asChild variant="outline" className="rounded-full border-cream/50 bg-transparent px-7 text-cream hover:bg-cream hover:text-burgundy"><a href="mailto:info@snsglamshairmakeupstudio.com">Email Us</a></Button></div></Reveal></section>}

export function PageHero({script,title,description,image}:{script:string;title:string;description?:string;image?:string}){return <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-burgundy px-5 pb-16 pt-32 text-cream sm:pb-24">{image&&<img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45"/>}<div className="absolute inset-0 bg-gradient-to-r from-ink via-burgundy/70 to-transparent"/><div className="relative z-10 mx-auto w-full max-w-7xl"><p className="font-script text-4xl text-rose sm:text-5xl">{script}</p><h1 className="max-w-4xl font-display text-5xl uppercase leading-[.9] sm:text-8xl">{title}</h1>{description&&<p className="mt-5 max-w-xl text-cream/80">{description}</p>}</div></section>}

export function TextLink({to,children}:{to:string;children:React.ReactNode}){return <Button asChild variant="outline" className="rounded-full border-rose bg-transparent text-burgundy"><Link to={to}>{children}<ArrowRight/></Link></Button>}
