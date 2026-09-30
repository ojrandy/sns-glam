import { createFileRoute, Outlet } from "@tanstack/react-router";
// Layout only: renders the services index or a single service page.
export const Route=createFileRoute("/services")({component:Outlet});
