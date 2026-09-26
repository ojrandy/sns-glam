import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, LoaderCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, getService, type ServiceId } from "@/data/services";
import { site } from "@/data/site";
import { submitWeb3Form } from "@/lib/web3forms";

type Selection = { service?: ServiceId; package?: string };
type BookingContextType = { openBooking: (selection?: Selection) => void; closeBooking: () => void };
const BookingContext = createContext<BookingContextType | null>(null);
export const TIME_SLOTS = {
  Morning: ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
  Evening: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  Night: ["8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"],
};
export function useBooking() { const value = useContext(BookingContext); if (!value) throw new Error("useBooking must be used within BookingProvider"); return value; }
export function BookingProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<Selection | null>(null);
  const value = useMemo(() => ({ openBooking: (next: Selection = {}) => setSelection(next), closeBooking: () => setSelection(null) }), []);
  return <BookingContext.Provider value={value}>{children}<BookingModal selection={selection} close={value.closeBooking} /></BookingContext.Provider>;
}
function BookingModal({ selection, close }: { selection: Selection | null; close: () => void }) {
  const dialog = useRef<HTMLDivElement>(null); const [serviceId, setServiceId] = useState<ServiceId>(selection?.service || "makeup"); const [packageName, setPackageName] = useState(selection?.package || ""); const [venue, setVenue] = useState(false); const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle"); const [errors, setErrors] = useState<Record<string,string>>({});
  const service = getService(serviceId) || services[0];
  useEffect(() => { if (!selection) return; setServiceId(selection.service || "makeup"); setPackageName(selection.package || ""); setStatus("idle"); document.body.classList.add("modal-open"); const previous=document.activeElement as HTMLElement|null; setTimeout(()=>dialog.current?.focus(),50); const onKey=(e:KeyboardEvent)=>{ if(e.key==="Escape") close(); }; window.addEventListener("keydown",onKey); return()=>{document.body.classList.remove("modal-open");window.removeEventListener("keydown",onKey);previous?.focus();}; }, [selection, close]);
  if (!selection) return null;
  const selectedPackage = service.packages.find((p)=>p.name===packageName);
  async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const form=new FormData(e.currentTarget); const required=["name","email","phone","package","date","time","location","deposit"]; const next:Record<string,string>={}; required.forEach((key)=>{if(!form.get(key))next[key]="Please complete this field."}); if(venue&&!form.get("address"))next.address="Please add the venue address."; setErrors(next); if(Object.keys(next).length)return; setStatus("loading"); try { const data=Object.fromEntries(form.entries()); await submitWeb3Form({ subject:`New Booking Request: ${service.name} (${packageName})`, replyto:data.email, ...data, service:service.name }); setStatus("success"); e.currentTarget.reset(); } catch { setStatus("error"); } }
  const field="w-full rounded-lg border border-border bg-cream px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose";
  return <AnimatePresence><motion.div className="fixed inset-0 z-[100] flex items-end justify-center bg-burgundy/80 backdrop-blur-md md:items-center md:p-6" onMouseDown={(e)=>{if(e.target===e.currentTarget)close()}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><motion.div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="quote-title" tabIndex={-1} initial={{opacity:0,y:30,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:30}} className="grid h-[100dvh] w-full overflow-hidden bg-cream shadow-2xl outline-none md:h-auto md:max-h-[92vh] md:max-w-6xl md:grid-cols-[.75fr_1.25fr] md:rounded-2xl">
    <aside className="relative hidden min-h-[680px] md:block"><img src={service.image} alt={service.name} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-ink via-burgundy/25 to-transparent"/><div className="absolute inset-x-0 bottom-0 z-10 p-9 text-cream"><p className="font-script text-4xl text-rose">Your moment</p><h2 className="font-display text-4xl">{service.name}</h2><p>{packageName || "Choose your package"} {selectedPackage ? `· $${selectedPackage.price}` : ""}</p><p className="mt-5 border-t border-rose/50 pt-5 text-sm">A $30 deposit secures your appointment.</p></div></aside>
    <div className="relative overflow-y-auto p-5 pt-16 md:p-10"><Button aria-label="Close booking" variant="ghost" size="icon" className="absolute right-4 top-4" onClick={close}><X/></Button>{status==="success"?<div className="flex min-h-[520px] flex-col items-center justify-center text-center"><motion.div initial={{scale:0}} animate={{scale:1}} className="rose-gradient mb-5 grid size-20 place-items-center rounded-full text-cream"><Check className="size-10"/></motion.div><h2 className="font-display text-4xl">Your request is in!</h2><p className="mt-3 max-w-md text-muted-foreground">We'll email you shortly to confirm your date and deposit.</p><Button className="rose-gradient mt-7 rounded-full text-primary-foreground" onClick={close}>Done</Button></div>:<><p className="font-script text-3xl text-rose">Let’s plan your look</p><h2 id="quote-title" className="font-display text-4xl uppercase">Get a Quote</h2><form onSubmit={submit} className="mt-6 grid gap-4 md:grid-cols-2" noValidate>
      <Field label="Full name" name="name" error={errors.name}><input name="name" maxLength={100} className={field}/></Field><Field label="Email" name="email" error={errors.email}><input name="email" type="email" maxLength={255} className={field}/></Field><Field label="Phone" name="phone" error={errors.phone}><input name="phone" type="tel" maxLength={30} className={field}/></Field>
      <Field label="Service" name="service"><select name="service" value={serviceId} onChange={(e)=>{setServiceId(e.target.value as ServiceId);setPackageName("")}} className={field}>{services.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></Field>
      <Field label="Package" name="package" error={errors.package}><select name="package" value={packageName} onChange={(e)=>setPackageName(e.target.value)} className={field}><option value="">Select a package</option>{service.packages.map(p=><option key={p.name}>{p.name}{p.price?` — $${p.price}`:" — Quote on request"}</option>)}</select></Field>
      <Field label="Occasion" name="occasion"><select name="occasion" className={field}><option>Wedding</option><option>Birthday</option><option>Anniversary</option><option>Graduation</option><option>Photoshoot</option><option>Other</option></select></Field>
      <Field label="Number of people" name="people"><select name="people" className={field}>{["1","2","3","4","5","6","7","8","9","10+"].map(x=><option key={x}>{x}</option>)}</select></Field>
      <Field label="Location" name="location" error={errors.location}><select name="location" className={field} onChange={(e)=>setVenue(e.target.value==="At my venue")}><option>At the studio</option><option>At my venue</option></select></Field>
      {venue&&<Field label="Venue address" name="address" error={errors.address}><input name="address" maxLength={250} className={field}/></Field>}
      <Field label="Preferred date" name="date" error={errors.date}><input name="date" type="date" min={new Date().toISOString().split("T")[0]} className={field}/></Field>
      <Field label="Preferred time" name="time" error={errors.time}><select name="time" className={field}><option value="">Choose a time</option>{Object.entries(TIME_SLOTS).map(([group,slots])=><optgroup key={group} label={group}>{slots.map(slot=><option key={slot}>{slot}</option>)}</optgroup>)}</select></Field>
      <label className="md:col-span-2"><span className="mb-1 block text-sm font-medium">Notes</span><textarea name="notes" maxLength={1000} rows={3} className={field} placeholder="Inspiration, hair details, or anything we should know"/></label>
      <input name="botcheck" className="hidden" tabIndex={-1} autoComplete="off"/>
      <label className="flex items-start gap-3 text-sm md:col-span-2"><input type="checkbox" name="deposit" className="mt-1 accent-rose"/><span>I understand a $30 deposit secures my booking. SnS Glams will email me to confirm and send deposit details.</span></label>{errors.deposit&&<p className="text-sm text-destructive md:col-span-2">{errors.deposit}</p>}
      {status==="error"&&<p className="rounded-lg bg-blush p-3 text-sm md:col-span-2">We couldn't send your request. Please <a className="underline" href={`mailto:${site.email}`}>email us directly</a>.</p>}
      <Button disabled={status==="loading"} className="rose-gradient h-12 rounded-full text-primary-foreground md:col-span-2">{status==="loading"?<><LoaderCircle className="animate-spin"/> Sending…</>:"Send Booking Request"}</Button>
    </form></>}</div>
  </motion.div></motion.div></AnimatePresence>;
}
function Field({label,name,error,children}:{label:string;name:string;error?:string;children:ReactNode}) { return <label><span className="mb-1 block text-sm font-medium">{label}{["name","email","phone","package","date","time","location"].includes(name)?" *":""}</span>{children}{error&&<span className="mt-1 block text-xs text-destructive">{error}</span>}</label> }
