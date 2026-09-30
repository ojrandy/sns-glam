import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
const service=getService("hair-installations");
export const Route=createFileRoute("/services/hair-installations")({head:()=>({meta:[{title:"Hair Installations — SnS Glams"},{name:"description",content:service?.details.metaDescription??""},{property:"og:title",content:"Hair Installations — SnS Glams"},{property:"og:description",content:service?.details.metaDescription??""},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=>service?<ServicePage service={service}/>:null});
