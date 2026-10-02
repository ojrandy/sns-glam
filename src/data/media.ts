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

// Home page photography: copies of src/Images/img saved as .jpg (servers label .jfif as image/pjpeg, which some browsers reject).
// img18 is a byte-identical copy of img6, so it is not included.
import home1 from "@/assets/home/img1.jpg";
import home2 from "@/assets/home/img2.jpg";
import home3 from "@/assets/home/img3.jpg";
import home4 from "@/assets/home/img4.jpg";
import home5 from "@/assets/home/img5.jpg";
import home6 from "@/assets/home/img6.jpg";
import home7 from "@/assets/home/img7.jpg";
import home8 from "@/assets/home/img8.jpg";
import home9 from "@/assets/home/img9.jpg";
import home10 from "@/assets/home/img10.jpg";
import home11 from "@/assets/home/img11.jpg";
import home12 from "@/assets/home/img12.jpg";
import home13 from "@/assets/home/img13.jpg";
import home14 from "@/assets/home/img14.jpg";
import home15 from "@/assets/home/img15.jpg";
import home16 from "@/assets/home/img16.jpg";
import home17 from "@/assets/home/img17.jpg";
import home20 from "@/assets/home/img20.jpg";
import home21 from "@/assets/home/img21.jpg";

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

export const homeMedia = {
  fingerWaves: home1,
  bodyWaveSmile: home2,
  blondeTwaGlow: home3,
  honeyWavesOrange: home4,
  blondeCropGlam: home5,
  goldenWavesGlam: home6,
  pinkCutCrease: home7,
  honeyWavesSoft: home8,
  sleekBob: home9,
  sleekStraight: home10,
  emeraldGlam: home11,
  knotlessBraids: home12,
  copperPonytail: home13,
  burgundyCurlsUpdo: home14,
  burgundyCurlsProfile: home15,
  cornrowsGlam: home16,
  goldenWavesSmile: home17,
  halfUpWaves: home20,
  sleekPonytail: home21,
};
