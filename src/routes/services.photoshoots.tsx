import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/pages";
import { getService } from "@/data/services";
export const Route=createFileRoute("/services/photoshoots")({loader:()=>{const service=getService("photoshoots");if(!service)throw notFound();return service;},head:({loaderData})=>({meta:[{title:"Studio Photoshoots — SnS Glams"},{name:"description",content:loaderData?.details.metaDescription??""},{property:"og:title",content:"Studio Photoshoots — SnS Glams"},{property:"og:description",content:loaderData?.details.metaDescription??""},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:PhotoshootsPage});
function PhotoshootsPage(){return <ServicePage service={Route.useLoaderData()}/>}
