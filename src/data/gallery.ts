import makeup from "@/assets/makeup-editorial.jpg";
import hair from "@/assets/hair-editorial.jpg";
import photoshoot from "@/assets/photoshoot-editorial.jpg";
import braiding from "@/assets/braids-editorial.jpg";
import type { ServiceId } from "./services";

// Studio work: 640px grid thumbnails + 1280px versions for the lightbox, resized from src/Images.
const studio = import.meta.glob<string>("/src/assets/gallery/*.jpg", {
  eager: true,
  import: "default",
});
const asset = (file: string) => {
  const url = studio[`/src/assets/gallery/${file}.jpg`];
  if (!url) throw new Error(`Missing gallery image: ${file}.jpg`);
  return url;
};
const local = (name: string) => ({ src: asset(name), full: asset(`${name}-lg`) });
// Free Unsplash photos (Unsplash License) to round out categories we have fewer studio shots of.
const unsplash = (id: string) => ({
  src: `https://images.unsplash.com/photo-${id}?w=640&q=70&auto=format&fit=crop`,
  full: `https://images.unsplash.com/photo-${id}?w=1400&q=80&auto=format&fit=crop`,
});

export type GalleryCategory = "makeup" | "hair" | "photoshoot" | "braiding";
export type GalleryItem = {
  src: string;
  full: string;
  alt: string;
  title: string;
  category: GalleryCategory;
};

export const galleryCategories: { id: GalleryCategory; label: string; service: ServiceId }[] = [
  { id: "makeup", label: "Makeup", service: "makeup" },
  { id: "hair", label: "Hair Installations", service: "hair-installations" },
  { id: "photoshoot", label: "Photoshoots", service: "photoshoots" },
  { id: "braiding", label: "Hair Braiding", service: "hair-braiding" },
];

// The first four are the editorial hero images other pages reference by index.
export const gallery: [GalleryItem, GalleryItem, GalleryItem, GalleryItem, ...GalleryItem[]] = [
  {
    src: makeup,
    full: makeup,
    alt: "Soft glam beauty portrait",
    title: "Soft Glam Portrait",
    category: "makeup",
  },
  {
    src: hair,
    full: hair,
    alt: "Glossy body wave hair installation",
    title: "Glossy Body Wave",
    category: "hair",
  },
  {
    src: photoshoot,
    full: photoshoot,
    alt: "Burgundy gown studio portrait",
    title: "Burgundy Gown Session",
    category: "photoshoot",
  },
  {
    src: braiding,
    full: braiding,
    alt: "Regal braided hairstyle",
    title: "Regal Braids",
    category: "braiding",
  },
  {
    ...local("bridal-veil"),
    alt: "Bridal glam with birdcage veil",
    title: "Bridal Glam",
    category: "makeup",
  },
  {
    ...local("golden-waves"),
    alt: "Golden brown waves with full glam",
    title: "Golden Brown Waves",
    category: "hair",
  },
  {
    ...local("lilac-editorial"),
    alt: "Lilac glam editorial portrait",
    title: "Lilac Editorial",
    category: "photoshoot",
  },
  {
    ...unsplash("1572955304332-bf714bd49add"),
    alt: "Long box braids styled in a high bun",
    title: "Box Braid Bun",
    category: "braiding",
  },
  {
    ...local("lash-closeup"),
    alt: "Close-up of soft glam and lashes",
    title: "Lashes & Glow",
    category: "makeup",
  },
  {
    ...local("plum-waves"),
    alt: "Plum body wave install",
    title: "Plum Body Wave",
    category: "hair",
  },
  {
    ...unsplash("1704208316515-a32f81e373ef"),
    alt: "Studio portrait against a deep red backdrop",
    title: "Red Room Session",
    category: "photoshoot",
  },
  {
    ...local("braided-updo"),
    alt: "Feed-in braided updo with full glam",
    title: "Braided Updo",
    category: "braiding",
  },
  {
    ...local("pin-curl-updo"),
    alt: "Vintage pin-curl updo with bold glam",
    title: "Pin-Curl Glam",
    category: "makeup",
  },
  {
    ...local("copper-straight"),
    alt: "Copper straight hair installation",
    title: "Copper Silk Press",
    category: "hair",
  },
  {
    ...unsplash("1613099084406-4b9140fc780a"),
    alt: "Knotless braids with a warm golden backdrop",
    title: "Golden Hour Braids",
    category: "braiding",
  },
  {
    ...local("mirror-portrait"),
    alt: "Soft-lit portrait with long brown waves",
    title: "Soft Light Portrait",
    category: "photoshoot",
  },
  {
    ...local("finger-waves"),
    alt: "Finger waves with smoky glam",
    title: "Finger Waves & Smoke",
    category: "makeup",
  },
  {
    ...local("burgundy-curls"),
    alt: "Burgundy curly install",
    title: "Burgundy Curls",
    category: "hair",
  },
  {
    ...local("braided-curls"),
    alt: "Braided sides with curly install",
    title: "Braids & Curls",
    category: "braiding",
  },
  {
    ...unsplash("1632765866070-3fadf25d3d5b"),
    alt: "Studio beauty portrait with glossy lips",
    title: "Glossy Studio Portrait",
    category: "photoshoot",
  },
  {
    ...local("short-crop-glam"),
    alt: "Short crop with bronze glam",
    title: "Bronze Glam",
    category: "makeup",
  },
  {
    ...local("ruby-body-wave"),
    alt: "Ruby red body wave install",
    title: "Ruby Body Wave",
    category: "hair",
  },
  {
    ...unsplash("1592520113018-180c8bc831c9"),
    alt: "Straight-back cornrow braids",
    title: "Classic Cornrows",
    category: "braiding",
  },
  {
    ...unsplash("1634826260499-7d97a6049913"),
    alt: "Editorial portrait in a black hat and dress",
    title: "Editorial Black",
    category: "photoshoot",
  },
  {
    ...local("pixie-glam"),
    alt: "Blonde pixie with shimmer glam",
    title: "Shimmer Pixie",
    category: "makeup",
  },
  {
    ...local("sleek-straight"),
    alt: "Sleek straight hair installation",
    title: "Sleek & Straight",
    category: "hair",
  },
  {
    ...unsplash("1606415918835-88d0614e75ad"),
    alt: "Long knotless braids and a gold satin blouse",
    title: "Knotless Braids",
    category: "braiding",
  },
  {
    ...local("wine-halter"),
    alt: "Glam portrait in a wine halter",
    title: "Wine Halter Glam",
    category: "makeup",
  },
  {
    ...local("honey-bob"),
    alt: "Honey blonde bob with bronze glam",
    title: "Honey Blonde Bob",
    category: "hair",
  },
  {
    ...unsplash("1613876214872-a73df2a1b8bc"),
    alt: "Studio portrait with voluminous natural hair",
    title: "Natural Volume",
    category: "photoshoot",
  },
  {
    ...unsplash("1527203561188-dae1bc1a417f"),
    alt: "Profile of a braided ponytail",
    title: "Braided Ponytail",
    category: "braiding",
  },
  {
    ...local("full-glam-red"),
    alt: "Full glam with deep side part",
    title: "Full Glam",
    category: "makeup",
  },
  {
    ...local("half-up-waves"),
    alt: "Half-up top knot with body waves",
    title: "Half-Up Waves",
    category: "hair",
  },
  {
    ...local("deep-wave"),
    alt: "Deep wave install with pink shimmer glam",
    title: "Deep Wave",
    category: "hair",
  },
  {
    ...unsplash("1709672262859-68cb9b39ae4f"),
    alt: "Long auburn braids with a denim jacket",
    title: "Auburn Braids",
    category: "braiding",
  },
  {
    ...local("sleek-ponytail"),
    alt: "Sleek high ponytail with glam",
    title: "Sleek Ponytail",
    category: "makeup",
  },
  {
    ...local("blonde-install"),
    alt: "Blonde install with bold glam",
    title: "Blonde Bombshell",
    category: "hair",
  },
  { ...local("sleek-bob"), alt: "Sleek bob with soft glam", title: "Sleek Bob", category: "hair" },
  {
    ...local("golden-curls"),
    alt: "Golden curls install",
    title: "Golden Curls",
    category: "hair",
  },
  {
    ...local("honey-blonde"),
    alt: "Honey blonde waves with glam",
    title: "Honey Blonde Waves",
    category: "hair",
  },
  {
    ...local("finger-wave-glam"),
    alt: "Sculpted finger waves with soft glam",
    title: "Finger Wave Glam",
    category: "makeup",
  },
  {
    ...local("knotless-braids"),
    alt: "Long knotless braids with full glam",
    title: "Studio Knotless Braids",
    category: "braiding",
  },
  {
    ...local("body-wave-smile"),
    alt: "Smiling client with a body wave install",
    title: "Body Wave Smile",
    category: "hair",
  },
  {
    ...local("pink-cut-crease"),
    alt: "Pink cut crease eye look",
    title: "Pink Cut Crease",
    category: "makeup",
  },
  {
    ...local("honey-waves-orange"),
    alt: "Honey waves install with an orange halter",
    title: "Honey Waves",
    category: "hair",
  },
  {
    ...local("cornrows-glam"),
    alt: "Cornrow braids with full glam",
    title: "Cornrows & Glam",
    category: "braiding",
  },
  {
    ...local("emerald-glam"),
    alt: "Glam portrait in emerald",
    title: "Emerald Glam",
    category: "makeup",
  },
  {
    ...local("blonde-soft-curls"),
    alt: "Blonde soft curls install with pink-toned glam",
    title: "Blonde Soft Curls",
    category: "hair",
  },
  {
    ...local("blonde-twa-glow"),
    alt: "Blonde short natural hair with glowing glam",
    title: "Blonde Glow",
    category: "makeup",
  },
  {
    ...local("honey-bob-waves"),
    alt: "Honey bob waves with smoky glam",
    title: "Honey Bob Waves",
    category: "hair",
  },
  {
    ...local("sleek-bob-glam"),
    alt: "Sleek bob with full glam",
    title: "Sleek Bob Glam",
    category: "makeup",
  },
  {
    ...local("burgundy-curls-updo"),
    alt: "Burgundy curls styled in an updo",
    title: "Burgundy Curl Updo",
    category: "hair",
  },
  {
    ...local("sleek-ponytail-glam"),
    alt: "Sleek ponytail with bold glam",
    title: "Ponytail Glam",
    category: "makeup",
  },
  {
    ...local("burgundy-curls-profile"),
    alt: "Side profile of a burgundy curly install",
    title: "Burgundy Curls Profile",
    category: "hair",
  },
  {
    ...local("sleek-straight-glam"),
    alt: "Sleek straight install with soft glam",
    title: "Sleek Straight Glam",
    category: "hair",
  },
];
