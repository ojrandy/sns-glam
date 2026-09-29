import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
export const Route=createFileRoute("/services/hair-installations")({loader:()=>{const service=getService("hair-installations");if(!service)throw notFound();return service;},head:()=>({meta:[{title:"Hair Installations — SnS Glams"},{name:"description",content:"Book hair installations at SnS Glams in Maryland."},{property:"og:title",content:"Hair Installations — SnS Glams"},{property:"og:description",content:"Personalized hair installations for every occasion."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:HairInstallationsPage});
function HairInstallationsPage(){return <ServicePage service={Route.useLoaderData()}/>}
