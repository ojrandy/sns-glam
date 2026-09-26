import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/pages";
export const Route=createFileRoute("/privacy-policy")({head:()=>({meta:[{title:"Privacy Policy — SnS Glams"},{name:"description",content:"How SnS Glams handles booking and enquiry information."},{property:"og:title",content:"Privacy Policy — SnS Glams"},{property:"og:description",content:"How SnS Glams handles booking and enquiry information."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=> <LegalPage type="privacy"/>});
