# SnS Glams Hair & Makeup Studio

## Goal
Build the complete static, multi-route studio website described across the three supplied briefs. The experience will blend warm boutique editorial layouts, burgundy-and-rose-gold luxury styling, and clear studio-service structure while remaining fast and fully usable on phones, tablets, and desktops.

## Site foundation
- Replace the placeholder home screen with a shared branded shell: sticky transparent-to-cream navigation, services menu, full-screen mobile menu, footer, smooth scrolling, route transitions, and one global booking experience.
- Establish the supplied design system in semantic tokens: burgundy, rose, cream, blush, nude, ink, rose-gold treatment, fine borders, subtle dark-section grain, and restrained rounded corners.
- Load Cormorant Garamond, Allura, and Jost; use editorial display typography and accessible body text.
- Use Motion for route/reveal/parallax interactions, Lenis for smooth scrolling, Embla for the home slider, and reduced-motion fallbacks.

## Imagery and content data
- Generate a cohesive on-brand photo collection featuring Black women across makeup, hair installations, studio portraiture, bridal/occasion looks, and braiding.
- Create centralized brand, services/pricing, gallery, empty reviews, and blog-post data so pricing and copy stay consistent everywhere.
- Mark the strongest gallery images as featured and reuse them intentionally across heroes, cards, mosaics, and editorial compositions.

## Home page
- Build the four-slide, full-viewport service carousel with autoplay, pause, swipe, progress indicators, navigation arrows, Ken Burns movement, reanimated copy, booking actions, and service links.
- Add the trust strip, infinite services marquee, four circular service portraits, split-image studio introduction, and signature package cards.
- Add the desktop pinned occasions story with a mobile vertical alternative, featured editorial gallery mosaic, empty-state reviews feature, three latest articles, and photographic booking banner.
- Ensure every booking entry point opens the same quote form with the relevant service or package selected.

## Routes and content
- Create distinct pages for Home, About, Services, each of the four service details, Gallery, Reviews, Blog, each Blog Post, Bookings, Contact, FAQ, Privacy Policy, Disclaimer, and a branded not-found state.
- Use the supplied exact copy for About, FAQ, blog articles, Contact, Privacy Policy, and Disclaimer.
- Give service pages pricing/package choices, preparation or service context, partnership attribution for braiding, and direct booking actions.
- Give Gallery useful category filtering, Blog a featured story and article grid, posts a reading-progress indicator, and Reviews the specified elegant empty state.
- Add unique page titles and sharing descriptions for every content route.

## Booking and contact forms
- Add one app-wide booking provider and exactly one “Get a Quote” modal, with preselection from every Book action.
- Build the modal as a desktop split panel and mobile full-height sheet with backdrop/X/Escape dismissal, focus trapping, and scroll locking.
- Add all requested fields, dependent package choices, venue-address condition, 30-minute grouped time slots, future-only date picker, deposit consent, honeypot, and friendly inline validation.
- Submit booking and contact requests through one reusable Web3Forms helper, with loading, success, failure, email fallback, and form reset states.
- Add the sample environment variable file; if no key is configured, show the graceful email fallback rather than pretending submission succeeded.

## Quality checks
- Verify navigation, dropdowns, mobile menu, carousel, gallery filters, FAQ accordions, booking preselection, modal dismissal/focus, validation, form states, and blog navigation.
- Check desktop and mobile layouts for clipping, overlaps, text fit, image framing, and reduced-motion behavior.
- Confirm the current build is clean after implementation.
