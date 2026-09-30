// Real client work from the studio (src/Images) plus free Unsplash stock (src/assets/stock) for scenes we don't have yet.
import fullGlam from "@/Images/full-glam.jpeg";
import bridalGlam from "@/Images/bridal-glam.jpeg";
import sleekInstall from "@/Images/sleek-install.jpeg";
import editorialShoot from "@/Images/editorial-shoot.jpeg";
import lashCloseUp from "@/Images/lash-close-up.jpeg";
import curlsGlam from "@/Images/curls-glam.jpeg";
import honeyBob from "@/Images/honey-bob-studio.jpeg";
import goldenWaves from "@/Images/golden-waves-studio.jpeg";
import plumWaves from "@/Images/plum-waves-studio.jpeg";
import softWaves from "@/Images/soft-waves.jpeg";
import deepPlum from "@/Images/deep-plum.jpeg";
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
