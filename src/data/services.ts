import makeupHero from "@/Images/WhatsApp Image 2026-06-23 at 2.27.30 AM(14).jpeg";
import hairHero from "@/Images/WhatsApp Image 2026-06-23 at 2.27.28 AM(9).jpeg";
import photoHero from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(18).jpeg";
import braidsHero from "@/Images/WhatsApp Image 2026-06-23 at 2.26.54 AM(11).jpeg";

export type ServiceId = "makeup" | "hair-installations" | "photoshoots" | "hair-braiding";
export type Service = { 
  id: ServiceId; 
  name: string; 
  eyebrow: string; 
  headline: string; 
  description: string; 
  image: string; 
  href: string; 
  packages: { name: string; price: number | null }[] 
};

export const services: Service[] = [
  { 
    id: "makeup", 
    name: "Makeup", 
    eyebrow: "THE ART OF GLAM", 
    headline: "Glam That Speaks Before You Do.", 
    description: "Soft, full and bridal glam for every moment.", 
    image: makeupHero, 
    href: "/services/makeup", 
    packages: [
      { name: "Soft Glam", price: 100 }, 
      { name: "Full Glam", price: 120 }, 
      { name: "Bridal Glam", price: 250 }
    ] 
  },
  { 
    id: "hair-installations", 
    name: "Hair Installations", 
    eyebrow: "EFFORTLESS FINISH", 
    headline: "Flawless Installs. Effortless Confidence.", 
    description: "Seamless installs and 360 finishes that look like they grew there.", 
    image: hairHero, 
    href: "/services/hair-installations", 
    packages: [
      { name: "Hair Installation", price: 100 }, 
      { name: "360 Installation", price: 150 }, 
      { name: "Bridal Hair", price: 250 }
    ] 
  },
  { 
    id: "photoshoots", 
    name: "Studio Photoshoots", 
    eyebrow: "IN YOUR BEST LIGHT", 
    headline: "Your Moment, Beautifully Captured.", 
    description: "In-studio shoots with lighting, direction and edits done right.", 
    image: photoHero, 
    href: "/services/photoshoots", 
    packages: [
      { name: "8 photos + 2 outfits", price: 300 }, 
      { name: "10 photos + 4 outfits", price: 350 }, 
      { name: "12 photos + 5 outfits", price: 400 }
    ] 
  },
  { 
    id: "hair-braiding", 
    name: "Hair Braiding", 
    eyebrow: "ROOTED IN BEAUTY", 
    headline: "Crowned in Heritage.", 
    description: "Beautiful braids with our partners at Heritage African Hair Braiding.", 
    image: braidsHero, 
    href: "/services/hair-braiding", 
    packages: [
      { name: "Braiding Consultation", price: null }
    ] 
  },
];

export const featuredPackages = [
  { service: "makeup" as ServiceId, name: "Full Glam", price: 120 },
  { service: "makeup" as ServiceId, name: "Bridal Glam", price: 250 },
  { service: "hair-installations" as ServiceId, name: "360 Installation", price: 150 },
  { service: "photoshoots" as ServiceId, name: "10 photos + 4 outfits", price: 350 },
];

export const getService = (id?: string) => services.find((service) => service.id === id);
