import makeup1 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.30 AM.jpeg";
import makeup2 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.30 AM(1).jpeg";
import makeup3 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.30 AM(2).jpeg";
import makeup4 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.30 AM(3).jpeg";

import hair1 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.28 AM.jpeg";
import hair2 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.28 AM(1).jpeg";
import hair3 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.28 AM(2).jpeg";
import hair4 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.28 AM(3).jpeg";

import photoshoot1 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM.jpeg";
import photoshoot2 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(15).jpeg";
import photoshoot3 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(16).jpeg";
import photoshoot4 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(17).jpeg";

import braiding1 from "@/Images/WhatsApp Image 2026-06-23 at 2.26.54 AM.jpeg";
import braiding2 from "@/Images/WhatsApp Image 2026-06-23 at 2.26.54 AM(1).jpeg";
import braiding3 from "@/Images/WhatsApp Image 2026-06-23 at 2.26.54 AM(2).jpeg";
import braiding4 from "@/Images/WhatsApp Image 2026-06-23 at 2.26.54 AM(3).jpeg";
import home1 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(1).jpeg";
import home2 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(3).jpeg";
import home3 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(5).jpeg";
import home4 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(7).jpeg";
import home5 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(9).jpeg";
import home6 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(10).jpeg";
import home7 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(11).jpeg";
import home8 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(12).jpeg";
import home9 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(13).jpeg";
import home10 from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(14).jpeg";
import home11 from "@/Images/WhatsApp Image 2026-06-23 at 2.27.29 AM(1).jpeg";

export type GalleryCategory = "makeup" | "hair" | "photoshoot" | "braiding";

export const gallery = [
  { src: makeup1, alt: "Soft glam beauty portrait", category: "makeup" as const, featured: true },
  { src: hair1, alt: "Glossy body wave hair installation", category: "hair" as const, featured: true },
  { src: photoshoot1, alt: "Burgundy gown studio portrait", category: "photoshoot" as const, featured: true },
  { src: braiding1, alt: "Regal braided hairstyle", category: "braiding" as const, featured: true },
  
  { src: makeup2, alt: "Rose-gold full glam makeup", category: "makeup" as const, featured: true },
  { src: hair2, alt: "Luxury long wave hairstyle", category: "hair" as const, featured: true },
  { src: photoshoot2, alt: "Professional fashion photoshoot", category: "photoshoot" as const, featured: true },
  { src: braiding2, alt: "Intricate heritage braids", category: "braiding" as const, featured: true },
  
  { src: makeup3, alt: "Wedding guest glam", category: "makeup" as const, featured: false },
  { src: hair3, alt: "Seamless lace installation", category: "hair" as const, featured: false },
  { src: photoshoot3, alt: "Editorial studio session", category: "photoshoot" as const, featured: false },
  { src: braiding3, alt: "Traditional cornrow style", category: "braiding" as const, featured: false },
  
  { src: makeup4, alt: "Evening gala makeup", category: "makeup" as const, featured: false },
  { src: hair4, alt: "Volume waves installation", category: "hair" as const, featured: false },
  { src: photoshoot4, alt: "High-fashion portrait", category: "photoshoot" as const, featured: false },
  { src: braiding4, alt: "Box braids crown", category: "braiding" as const, featured: false },
] as const;

export const homePortraits = [home1, home2, home3, home4, home5, home6, home7, home8, home9, home10, home11] as const;
