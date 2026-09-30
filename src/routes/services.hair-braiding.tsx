import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
const service=getService("hair-braiding");
export const Route=createFileRoute("/services/hair-braiding")({head:()=>({meta:[{title:"Hair Braiding — SnS Glams"},{name:"description",content:service?.details.metaDescription??""},{property:"og:title",content:"Hair Braiding — SnS Glams"},{property:"og:description",content:service?.details.metaDescription??""},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:()=>service?<ServicePage service={service}/>:null});
