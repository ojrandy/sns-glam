import makeupImage from "@/Images/service-makeup.jpeg";
import hairImage from "@/Images/service-hair.jpeg";
import photoImage from "@/Images/service-photoshoot.jpeg";
import braidsImage from "@/Images/service-braids.jpeg";
import { media } from "./media";

export type ServiceId = "makeup" | "hair-installations" | "photoshoots" | "hair-braiding";
export type ServicePackage = { name: string; price: number | null; description: string; includes: string[] };
export type ServiceDetails = {
  metaDescription: string;
  intro: { script: string; title: string; paragraphs: string[] };
  feature: { image: string; alt: string; quote: string };
  highlights: { title: string; text: string }[];
  process: { title: string; text: string }[];
  prep: string[];
  faqs: [string, string][];
};
export type Service = { id: ServiceId; name: string; shortName: string; tagline: string; eyebrow: string; headline: string; description: string; image: string; href: string; packages: ServicePackage[]; details: ServiceDetails };

export const services: Service[] = [
  {
    id: "makeup", name: "Makeup", shortName: "Makeup", tagline: "Your glow, your way", eyebrow: "THE ART OF GLAM", headline: "Glam That Speaks Before You Do.", description: "Soft, full and bridal glam for every moment.", image: makeupImage, href: "/services/makeup",
    packages: [
      { name: "Soft Glam", price: 100, description: "A polished, skin-first look that enhances your features without feeling heavy.", includes: ["Skin prep & primer", "Natural contour & blush", "Neutral eyes", "Lashes"] },
      { name: "Full Glam", price: 120, description: "Sculpted, camera-ready glam with defined eyes and a flawless finish that lasts all night.", includes: ["Full-coverage base", "Sculpted contour & highlight", "Cut crease or smoky eye", "Lashes & setting"] },
      { name: "Bridal Glam", price: 250, description: "Long-wear bridal artistry designed around your dress, lighting and photographer.", includes: ["Pre-wedding look consultation", "Long-wear, tear-proof products", "Premium lashes", "Touch-up guidance for the day"] },
    ],
    details: {
      metaDescription: "Soft glam, full glam and bridal makeup in Maryland. Personalized makeup artistry at SnS Glams from $100.",
      intro: { script: "Your face, your vision", title: "Makeup Made For You", paragraphs: ["Great makeup starts with your skin, your features and how you want to feel. Before a single brush touches your face, we talk through your occasion, your outfit and the look you have in mind, then build a glam that is unmistakably you.", "Whether you want a barely-there glow for brunch or a full, sculpted beat for the stage, every look is designed to photograph beautifully and hold up from the first photo to the last dance."] },
      feature: { image: media.bridalGlam, alt: "Bridal glam makeup with birdcage veil", quote: "Glam that looks as good in person as it does on camera." },
      highlights: [
        { title: "Skin-first prep", text: "Every appointment begins with cleansing, hydrating and priming so your base looks like skin, not a mask." },
        { title: "Shade-matched for you", text: "We match foundation, concealer and powder to your undertone so there is no flashback or ashy finish in photos." },
        { title: "Built to last", text: "Long-wear techniques and setting keep your glam in place through heat, tears and long celebrations." },
        { title: "Lashes included", text: "Every package finishes with lashes chosen to suit your eye shape and the drama level you want." },
      ],
      process: [
        { title: "Consult", text: "Share your inspiration photos, outfit and occasion so we can plan your look." },
        { title: "Prep", text: "We cleanse, moisturize and prime to create a smooth canvas." },
        { title: "Create", text: "Base, sculpt, eyes, brows and lips, built step by step and checked in the light." },
        { title: "Set & reveal", text: "We lock everything in and make final tweaks before you walk out glowing." },
      ],
      prep: ["Arrive with a clean, moisturized face and no makeup.", "Bring inspiration photos and a picture of your outfit.", "Let us know about any allergies or skin sensitivities before your appointment.", "Avoid new skincare products or facials in the days before your appointment."],
      faqs: [
        ["Do you offer bridal trials?", "Yes. Mention a trial in your booking notes and we'll schedule it ahead of your wedding date."],
        ["Can you do makeup for my whole bridal party?", "Absolutely. Add the number of people to your booking request and we'll plan timing so everyone is ready on schedule."],
        ["Can you come to my venue?", "Yes, within 100 miles of our main studio. Choose \"At my venue\" when booking and share the address. A relocation fee applies, and venue bookings are subject to availability and cancellation."],
      ],
    },
  },
  {
    id: "hair-installations", name: "Hair Installations", shortName: "Install", tagline: "Hair that turns heads", eyebrow: "EFFORTLESS FINISH", headline: "Flawless Installs. Effortless Confidence.", description: "Seamless installs and 360 finishes that look like they grew there.", image: hairImage, href: "/services/hair-installations",
    packages: [
      { name: "Hair Installation", price: 100, description: "A secure, natural-looking install with a melted hairline and styling to finish.", includes: ["Natural hair prep", "Unit or bundle install", "Hairline customization", "Finished styling"] },
      { name: "360 Installation", price: 150, description: "A full 360 unit installed so you can wear it up, down or pulled back with confidence.", includes: ["Full-perimeter lace customization", "Plucking & bleaching guidance", "Secure 360 install", "Ponytail-ready styling"] },
      { name: "Bridal Hair", price: 250, description: "Wedding-day hair designed to complement your veil, accessories and makeup.", includes: ["Bridal style consultation", "Install or styling of your choice", "Veil & accessory placement", "Long-hold finish"] },
    ],
    details: {
      metaDescription: "Wig installs, 360 installations and bridal hair in Maryland. Seamless, natural-looking hair at SnS Glams from $100.",
      intro: { script: "Hair that grew there", title: "Seamless Installs, Every Time", paragraphs: ["A great install is all in the details: a hairline that melts into your skin, a secure fit that feels comfortable, and styling that moves like your own hair. That's the standard we work to on every client.", "From everyday units to full 360 installs and wedding-day styles, we customize each install to your head shape, skin tone and lifestyle so you can wear it with total confidence."] },
      feature: { image: media.sleekInstall, alt: "Sleek straight hair installation", quote: "The goal is simple: nobody should be able to tell where your hair ends and the unit begins." },
      highlights: [
        { title: "Melted hairlines", text: "Lace is customized, tinted and blended so your hairline looks natural up close." },
        { title: "Secure & comfortable", text: "We install with care for your edges and natural hair underneath." },
        { title: "Styled to finish", text: "Every install leaves the chair styled, whether that's sleek and straight, curls or soft waves." },
        { title: "Aftercare advice", text: "We'll share tips to keep your install looking fresh for as long as possible." },
      ],
      process: [
        { title: "Consult", text: "We look at your unit or bundles and talk through the style and parting you want." },
        { title: "Prep", text: "Your natural hair is prepped and secured flat for a smooth base." },
        { title: "Install", text: "The unit is customized, fitted and installed with a natural-looking hairline." },
        { title: "Style", text: "We cut, curl or sleek it into your finished look." },
      ],
      prep: ["Come with your natural hair washed, conditioned and fully dry.", "Bring your hair or unit to the appointment.", "If you need help sourcing hair, mention it in your booking notes.", "Share photos of the style and parting you'd like."],
      faqs: [
        ["Is hair included in installation prices?", "Prices cover the installation service. Bring your hair or unit, or mention in your notes if you need help sourcing it."],
        ["What is a 360 installation?", "A 360 unit has lace around the entire perimeter, so it can be worn in high ponytails and updos while still looking natural all the way around."],
        ["Can I pair my install with makeup?", "Yes. Add both services to your booking notes and we'll schedule them back to back so you leave fully glammed."],
      ],
    },
  },
  {
    id: "photoshoots", name: "Studio Photoshoots", shortName: "Photoshoot", tagline: "Your light, your story", eyebrow: "IN YOUR BEST LIGHT", headline: "Your Moment, Beautifully Captured.", description: "In-studio shoots with lighting, direction and edits done right.", image: photoImage, href: "/services/photoshoots",
    packages: [
      { name: "8 photos + 2 outfits", price: 300, description: "A focused session for birthdays, headshots or a fresh set of photos for your socials.", includes: ["2 outfit changes", "8 professionally edited photos", "Posing direction", "Studio lighting setup"] },
      { name: "10 photos + 4 outfits", price: 350, description: "More looks, more variety: ideal for milestone birthdays and brand content.", includes: ["4 outfit changes", "10 professionally edited photos", "Posing direction", "Backdrop changes"] },
      { name: "12 photos + 5 outfits", price: 400, description: "Our most complete session for when you want a full gallery of looks.", includes: ["5 outfit changes", "12 professionally edited photos", "Posing direction", "Backdrop & lighting changes"] },
    ],
    details: {
      metaDescription: "In-studio photoshoots in Maryland with lighting, posing direction and professional edits. Packages at SnS Glams from $300.",
      intro: { script: "Glam, then capture", title: "Our In-House Photo Studio", paragraphs: ["Our fully equipped photo studio sits under the same roof as our makeup and hair chairs, so you can get glammed and step straight in front of the camera while your look is at its freshest.", "You don't need to be a model. We guide you through every pose, adjust the lighting to flatter you, and professionally edit your final images so they're ready to post, print or frame."] },
      feature: { image: media.editorialShoot, alt: "Lilac glam editorial studio portrait", quote: "You bring the vision. We bring the lights, the direction and the final edits." },
      highlights: [
        { title: "Professional lighting", text: "Studio lighting set up to flatter your skin tone and bring out the details of your glam." },
        { title: "Posing direction", text: "We coach you through every shot, so you never have to wonder what to do with your hands." },
        { title: "Multiple looks", text: "Outfit changes are built into every package so you get variety in one session." },
        { title: "Edited images", text: "Your final photos are professionally retouched and delivered ready to share." },
      ],
      process: [
        { title: "Plan", text: "Tell us about your occasion, outfits and the mood you want." },
        { title: "Glam", text: "Add makeup or hair before your shoot so you're camera-ready." },
        { title: "Shoot", text: "We direct, light and capture each outfit in the studio." },
        { title: "Deliver", text: "Choose your favorites and receive your professionally edited images." },
      ],
      prep: ["Plan your outfits in advance and bring them pressed and ready.", "Bring any props, accessories or shoes you want featured.", "Book makeup or hair before your shoot for a complete look.", "Save a few reference photos of poses or moods you love."],
      faqs: [
        ["Can I book makeup and a photoshoot together?", "Yes, and it's what most clients do. Mention both in your booking notes and we'll schedule your glam right before your session."],
        ["Can I bring a partner, friends or family?", "Yes. Let us know how many people will be in the shoot when you book so we can plan the set."],
        ["Where can I see more of your photography?", "Follow our photography work on Instagram to see recent sessions."],
      ],
    },
  },
  {
    id: "hair-braiding", name: "Hair Braiding", shortName: "Braids", tagline: "Rooted in beauty", eyebrow: "ROOTED IN BEAUTY", headline: "Crowned in Heritage.", description: "Beautiful braids with our partners at Heritage African Hair Braiding.", image: braidsImage, href: "/services/hair-braiding",
    packages: [
      { name: "Braiding Consultation", price: null, description: "Tell us the style, length and size you want and we'll arrange a quote with our braiding partners.", includes: ["Style & length discussion", "Personalized quote", "Scheduling with our partner studio"] },
    ],
    details: {
      metaDescription: "Hair braiding in Maryland through SnS Glams and our partners at Heritage African Hair Braiding. Request a personalized quote.",
      intro: { script: "A crown worth wearing", title: "Braids, Through Trusted Partners", paragraphs: ["Braiding is an art form with deep roots, and we want our clients to have access to skilled hands who honor it. That's why we partner with Heritage African Hair Braiding, an independent studio, for all braided styles.", "Every braiding request is quoted individually because price depends on the style, size, length and hair you choose. Send us your inspiration and we'll help you get booked."] },
      feature: { image: media.braids, alt: "Regal braided hairstyle", quote: "Protective, beautiful and rooted in tradition." },
      highlights: [
        { title: "Protective styling", text: "Braided styles give your natural hair a break while still looking polished." },
        { title: "Every style", text: "From knotless and box braids to cornrows and twists, share any style you have in mind." },
        { title: "Custom quotes", text: "Pricing is based on your exact style, size and length, so you only pay for what you want." },
        { title: "Trusted partners", text: "Braiding is performed by our partners at Heritage African Hair Braiding." },
      ],
      process: [
        { title: "Request", text: "Send a consultation request with your style and inspiration photos." },
        { title: "Quote", text: "We confirm pricing based on your style, size and length." },
        { title: "Book", text: "Your appointment is scheduled with our braiding partner." },
        { title: "Braid", text: "Relax while your style is installed, then leave crowned." },
      ],
      prep: ["Come with your hair washed, detangled and fully dry.", "Share photos of the exact style, size and length you want.", "Ask whether braiding hair is included when you receive your quote.", "Plan for a longer appointment, since braided styles take time."],
      faqs: [
        ["Who does the braiding?", "Braiding is provided in partnership with Heritage African Hair Braiding, an independent studio partner."],
        ["How much do braids cost?", "Every braiding style is quoted individually based on style, size and length. Request a consultation to get your quote."],
        ["Can I book directly with the braiding studio?", "Yes. You can request through our form or visit Heritage African Hair Braiding's website directly."],
      ],
    },
  },
];
// `name` must match a package in `services` so the booking modal preselects it; `title` is the display label.
export const featuredPackages = [
  { service: "makeup" as ServiceId, name: "Full Glam", title: "Full Glam", price: 120, image: media.fullGlam, badge: null },
  { service: "makeup" as ServiceId, name: "Bridal Glam", title: "Bridal Glam", price: 250, image: media.bridalGlam, badge: "Most Loved" },
  { service: "hair-installations" as ServiceId, name: "360 Installation", title: "360 Installation", price: 150, image: media.sleekInstall, badge: null },
  { service: "photoshoots" as ServiceId, name: "10 photos + 4 outfits", title: "10-Photo Shoot", price: 350, image: media.editorialShoot, badge: null },
];
export const getService = (id?: string) => services.find((service) => service.id === id);
