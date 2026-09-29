import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
export const Route=createFileRoute("/services/makeup")({loader:()=>{const service=getService("makeup");if(!service)throw notFound();return service;},head:()=>({meta:[{title:"Makeup — SnS Glams"},{name:"description",content:"Book makeup at SnS Glams in Maryland."},{property:"og:title",content:"Makeup — SnS Glams"},{property:"og:description",content:"Personalized makeup for every occasion."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:MakeupPage});
function MakeupPage(){return <ServicePage service={Route.useLoaderData()}/>}
