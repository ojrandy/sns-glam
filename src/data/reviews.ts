export type Review = { name: string; service: string; rating: 1 | 2 | 3 | 4 | 5; text: string; date: string; source: "Instagram" | "Facebook" | "Google" | "Direct" };
// Add verified client reviews here, for example: { name: "A.", service: "Makeup", rating: 5, text: "...", date: "2026-09-01", source: "Direct" }
export const reviews: Review[] = [];
