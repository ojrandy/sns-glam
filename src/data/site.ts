export const site = {
  name: "SnS Glams Hair & Makeup Studio",
  shortName: "SnS Glams",
  address: "3400 Dodge Park Rd, MD 20785",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4275.665149564559!2d-76.88375078752422!3d38.93091527159907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c1000a141d43%3A0x17bbb0d097242673!2sSnS%20Glam!5e1!3m2!1sen!2scm!4v1790691145989!5m2!1sen!2scm",
  email: "info@snsglamshairmakeupstudio.com",
  phone: "",
  // Each number opens a WhatsApp chat (wa.me needs digits only, with country code).
  whatsapp: [
    { label: "+1 (240) 726-9869", number: "12407269869" },
    { label: "+1 (240) 797-9858", number: "12407979858" },
  ],
  hours: "Open 7 days a week, by appointment",
  timeZone: "America/New_York",
  // Shown wherever a client picks "At my venue".
  travelPolicy: {
    radiusMiles: 100,
    summary:
      "We travel to venues within 100 miles of our main studio. A relocation fee applies and is quoted when we confirm your booking. Venue bookings are subject to availability and may be cancelled if the location falls outside our travel radius.",
  },
  socials: {
    instagram: "https://www.instagram.com/sandyfav3",
    photoInstagram: "https://www.instagram.com/snsphoto.101",
    tiktok: "https://www.tiktok.com/@snsglams",
    facebook: "https://www.facebook.com/SnSGlams",
    youtube: "https://www.youtube.com/@SnSGlamsStudios",
  },
} as const;
