export const memorial = {
  person: {
    fullName: "Eleanor Rosewood",
    displayNameLines: ["Eleanor", "Rosewood"],
    years: { born: "1939", died: "2026" },
    portraitSrc: "/images/grandma.jpg",
    tribute:
      "A gentle soul who filled every room with warmth, laughter, and the scent of fresh roses.",
  },
  service: {
    label: "Funeral Service",
    title: "A Celebration of Her Life",
    date: "Saturday, 27 June 2026",
    time: "11:00 in the morning",
    location: "St. Mary's Chapel",
    address: "14 Willow Lane, Ashford",
  },
  reception: {
    label: "Reception After",
    title: "Tea & Remembrance",
    date: "Saturday, 27 June 2026",
    time: "1:00 in the afternoon",
    location: "The Rosewood Garden Room",
    address: "2 Orchard Close, Ashford",
  },
  dressCode:
    "Soft, comfortable attire in gentle tones. Eleanor adored a touch of colour - please feel free to wear something that brought you both joy.",
  rsvp: {
    replyBy: "20 June 2026",
    maxGuests: 12,
  },
  footer: {
    quote: "To live in the hearts of those we love is never to die.",
  },
} as const;

export type MemorialContent = typeof memorial;
