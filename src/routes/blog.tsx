import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages";
export const Route=createFileRoute("/blog")({head:()=>({meta:[{title:"Beauty Journal — SnS Glams"},{name:"description",content:"Beauty preparation, makeup and photoshoot advice from SnS Glams."},{property:"og:title",content:"Beauty Journal — SnS Glams"},{property:"og:description",content:"Beauty preparation, makeup and photoshoot advice from SnS Glams."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:BlogRoute});
function BlogRoute(){const path=useRouterState({select:s=>s.location.pathname});return path==="/blog"?<BlogPage/>:<Outlet/>}
