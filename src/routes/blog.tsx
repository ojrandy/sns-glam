import { createFileRoute, Outlet } from "@tanstack/react-router";
// Layout only: renders the blog index or a single post.
export const Route=createFileRoute("/blog")({component:Outlet});
