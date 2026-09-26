import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
const service=getService("photoshoots");
export const Route=createFileRoute("/services/photoshoots")({head:()=>({meta:[{title:"Studio Photoshoots — SnS Glams"},{name:"description",content:"Book studio photoshoots at SnS Glams in Maryland."},{property:"og:title",content:"Studio Photoshoots — SnS Glams"},{property:"og:description",content:"Personalized studio photoshoots for every occasion."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=>service?<ServicePage service={service}/>:null});
