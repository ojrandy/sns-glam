import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages";
export const Route=createFileRoute("/gallery")({head:()=>({meta:[{title:"Gallery — SnS Glams"},{name:"description",content:"Browse beauty, hair, braiding and portrait inspiration from SnS Glams."},{property:"og:title",content:"Gallery — SnS Glams"},{property:"og:description",content:"Browse beauty, hair, braiding and portrait inspiration from SnS Glams."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:GalleryPage});
