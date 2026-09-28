import { createFileRoute, notFound } from "@tanstack/react-router";
import { PostPage } from "@/components/pages";
import { getPost } from "@/data/posts";
export const Route=createFileRoute("/blog/$slug")({loader:({params})=>{const post=getPost(params.slug);if(!post)throw notFound();return post;},head:({loaderData})=>({meta:[{title:loaderData?`${loaderData.title} — SnS Glams Journal`:"Article Not Found — SnS Glams"},{name:"description",content:loaderData?.excerpt||"This article is unavailable."},{property:"og:title",content:loaderData?.title||"Article Not Found"},{property:"og:description",content:loaderData?.excerpt||"This article is unavailable."},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary_large_image"}]}),component:Post});
function Post(){return <PostPage post={Route.useLoaderData()}/>}
