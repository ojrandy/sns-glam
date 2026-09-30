<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to Lovable. Avoid rewriting published git history.
<!-- LOVABLE:END -->

- Keep all public site content in `src/data` and render it through shared components so pricing and brand details remain consistent.
- Keep one global booking modal under `BookingProvider`; every booking action supplies optional service/package preselection.
- Use TanStack Router file routes and shared chrome in the root route because this project uses TanStack Start.
- Parent routes with child pages render only an Outlet; their listing UI and metadata live in sibling index routes so nested pages remain visible.
