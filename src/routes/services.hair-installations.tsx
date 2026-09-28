import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
const service=getService("hair-installations");
export const Route=createFileRoute("/services_/hair-installations")({head:()=>({meta:[{title:"Hair Installations — SnS Glams"},{name:"description",content:"Book hair installations at SnS Glams in Maryland."},{property:"og:title",content:"Hair Installations — SnS Glams"},{property:"og:description",content:"Personalized hair installations for every occasion."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=>service?<ServicePage service={service}/>:null});
