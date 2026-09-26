import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages";
export const Route=createFileRoute("/about")({head:()=>({meta:[{title:"About — SnS Glams"},{name:"description",content:"Meet the artistry and heart behind SnS Glams Hair & Makeup Studio."},{property:"og:title",content:"About — SnS Glams"},{property:"og:description",content:"Meet the artistry and heart behind SnS Glams Hair & Makeup Studio."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AboutPage});
