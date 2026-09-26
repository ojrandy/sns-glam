import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/pages";
export const Route=createFileRoute("/reviews")({head:()=>({meta:[{title:"Client Reviews — SnS Glams"},{name:"description",content:"Client love and experiences from SnS Glams Hair & Makeup Studio."},{property:"og:title",content:"Client Reviews — SnS Glams"},{property:"og:description",content:"Client love and experiences from SnS Glams Hair & Makeup Studio."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:ReviewsPage});
