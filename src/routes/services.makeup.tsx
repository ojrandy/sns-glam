import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
const service=getService("makeup");
export const Route=createFileRoute("/services_/makeup")({head:()=>({meta:[{title:"Makeup — SnS Glams"},{name:"description",content:"Book makeup at SnS Glams in Maryland."},{property:"og:title",content:"Makeup — SnS Glams"},{property:"og:description",content:"Personalized makeup for every occasion."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=>service?<ServicePage service={service}/>:null});
