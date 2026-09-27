import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages";
export const Route=createFileRoute("/services")({head:()=>({meta:[{title:"Beauty Services — SnS Glams"},{name:"description",content:"Explore makeup, hair installations, studio photoshoots and braiding in Maryland."},{property:"og:title",content:"Beauty Services — SnS Glams"},{property:"og:description",content:"Explore makeup, hair installations, studio photoshoots and braiding in Maryland."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:ServicesRoute});
function ServicesRoute(){const path=useRouterState({select:s=>s.location.pathname});return path==="/services"?<ServicesPage/>:<Outlet/>}
