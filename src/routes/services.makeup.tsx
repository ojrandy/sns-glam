import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
export const Route=createFileRoute("/services/makeup")({loader:()=>{const service=getService("makeup");if(!service)throw notFound();return service;},head:({loaderData})=>({meta:[{title:"Makeup — SnS Glams"},{name:"description",content:loaderData?.details.metaDescription??""},{property:"og:title",content:"Makeup — SnS Glams"},{property:"og:description",content:loaderData?.details.metaDescription??""},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:MakeupPage});
function MakeupPage(){return <ServicePage service={Route.useLoaderData()}/>}
