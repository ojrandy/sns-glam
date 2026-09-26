import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages";
export const Route=createFileRoute("/contact")({head:()=>({meta:[{title:"Contact — SnS Glams"},{name:"description",content:"Contact SnS Glams Hair & Makeup Studio in Maryland."},{property:"og:title",content:"Contact — SnS Glams"},{property:"og:description",content:"Contact SnS Glams Hair & Makeup Studio in Maryland."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:ContactPage});
