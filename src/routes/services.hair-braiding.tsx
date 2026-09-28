import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
const service=getService("hair-braiding");
export const Route=createFileRoute("/services_/hair-braiding")({head:()=>({meta:[{title:"Hair Braiding — SnS Glams"},{name:"description",content:"Book hair braiding at SnS Glams in Maryland."},{property:"og:title",content:"Hair Braiding — SnS Glams"},{property:"og:description",content:"Personalized hair braiding for every occasion."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=>service?<ServicePage service={service}/>:null});
