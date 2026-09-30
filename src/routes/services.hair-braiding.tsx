import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
export const Route=createFileRoute("/services/hair-braiding")({loader:()=>{const service=getService("hair-braiding");if(!service)throw notFound();return service;},head:({loaderData})=>({meta:[{title:"Hair Braiding — SnS Glams"},{name:"description",content:loaderData?.details.metaDescription??""},{property:"og:title",content:"Hair Braiding — SnS Glams"},{property:"og:description",content:loaderData?.details.metaDescription??""},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:HairBraidingPage});
function HairBraidingPage(){return <ServicePage service={Route.useLoaderData()}/>}
