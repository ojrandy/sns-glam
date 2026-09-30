// Real client work from the studio (src/Images) plus free Unsplash stock (src/assets/stock) for scenes we don't have yet.
import fullGlam from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(7).jpeg";
import bridalGlam from "@/Images/WhatsApp Image 2026-06-23 at 2.27.29 AM(2).jpeg";
import sleekInstall from "@/Images/WhatsApp Image 2026-06-23 at 2.27.30 AM(9).jpeg";
import editorialShoot from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(3).jpeg";
import lashCloseUp from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(13).jpeg";
import curlsGlam from "@/Images/WhatsApp Image 2026-06-23 at 2.27.30 AM(13).jpeg";
import honeyBob from "@/Images/WhatsApp Image 2026-06-23 at 2.26.54 AM(4).jpeg";
import goldenWaves from "@/Images/WhatsApp Image 2026-06-23 at 2.27.28 AM(1).jpeg";
import plumWaves from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(2).jpeg";
import softWaves from "@/Images/WhatsApp Image 2026-06-23 at 2.27.28 AM(2).jpeg";
import deepPlum from "@/Images/WhatsApp Image 2026-06-23 at 2.29.11 AM(1).jpeg";
import makeupArtist from "@/assets/stock/makeup-artist.jpg";
import photoStudio from "@/assets/stock/photo-studio.jpg";
import wedding from "@/assets/stock/wedding.jpg";
import birthday from "@/assets/stock/birthday.jpg";
import anniversary from "@/assets/stock/anniversary.jpg";
import roses from "@/assets/stock/roses.jpg";
import photoshoot from "@/assets/photoshoot-editorial.jpg";
import braids from "@/assets/braids-editorial.jpg";

export const studioWork = [
  { src: fullGlam, alt: "Full glam makeup with soft body waves", category: "makeup" as const },
  { src: bridalGlam, alt: "Bridal glam with birdcage veil", category: "makeup" as const },
  { src: sleekInstall, alt: "Sleek straight hair installation", category: "hair" as const },
  { src: editorialShoot, alt: "Lilac glam editorial portrait", category: "photoshoot" as const },
  { src: lashCloseUp, alt: "Close-up of soft glam and lashes", category: "makeup" as const },
  { src: curlsGlam, alt: "Glam with voluminous curly install", category: "hair" as const },
  { src: honeyBob, alt: "Honey blonde bob with bronze glam", category: "hair" as const },
  { src: goldenWaves, alt: "Golden brown waves with full glam", category: "hair" as const },
  { src: plumWaves, alt: "Plum body wave install", category: "hair" as const },
  { src: softWaves, alt: "Soft glam with chestnut waves", category: "makeup" as const },
  { src: deepPlum, alt: "Deep plum waves with glowing skin", category: "hair" as const },
];

export const media = {
  fullGlam,
  bridalGlam,
  sleekInstall,
  editorialShoot,
  lashCloseUp,
  curlsGlam,
  honeyBob,
  goldenWaves,
  plumWaves,
  softWaves,
  deepPlum,
  makeupArtist,
  photoStudio,
  wedding,
  birthday,
  anniversary,
  roses,
  photoshoot,
  braids,
};
