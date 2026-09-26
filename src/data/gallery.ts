import makeup from "@/assets/makeup-editorial.jpg";
import hair from "@/assets/hair-editorial.jpg";
import photoshoot from "@/assets/photoshoot-editorial.jpg";
import braiding from "@/assets/braids-editorial.jpg";
export type GalleryCategory = "makeup" | "hair" | "photoshoot" | "braiding";
export const gallery = [
  { src: makeup, alt: "Soft glam beauty portrait", category: "makeup" as const, featured: true },
  { src: hair, alt: "Glossy body wave hair installation", category: "hair" as const, featured: true },
  { src: photoshoot, alt: "Burgundy gown studio portrait", category: "photoshoot" as const, featured: true },
  { src: braiding, alt: "Regal braided hairstyle", category: "braiding" as const, featured: true },
  { src: hair, alt: "Luxury long wave hairstyle", category: "hair" as const, featured: true },
  { src: makeup, alt: "Rose-gold full glam makeup", category: "makeup" as const, featured: true },
  { src: braiding, alt: "Intricate heritage braids", category: "braiding" as const, featured: true },
  { src: photoshoot, alt: "Professional fashion photoshoot", category: "photoshoot" as const, featured: true },
] as const;
