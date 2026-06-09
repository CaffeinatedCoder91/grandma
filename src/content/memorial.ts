export const memorial = {
  person: {
    fullName: "Maseline Joseph",
    displayNameLines: ["Maseline", "Joseph"],
    years: { born: "1938", died: "2026" },
    portraitSrc: "/grandma.jpg",
    tribute:
      "A gentle soul who filled every room with warmth, laughter and love",
  },
  service: {
    label: "Funeral Service",
    title: "A Celebration of Her Life",
    date: "Monday, 30 June 2026",
    time: "1:00 in the afternoon",
    location: "Mortlake Cemetery Chapel",
    address: "Mortlake, London",
  },
  reception: {
    label: "Reception After",
    title: "Tea & Remembrance",
    date: "Monday, 30 June 2026",
    time: "3:00 in the afternoon",
    location: "Reception",
    address: "70 Oxberry Avenue, sw6 5ss",
  },
  dressCode:
    "Please note formal black funeral attire is not necessary",
  rsvp: {
    replyBy: "19 June 2026",
    maxGuests: 12,
  },
  footer: {
    quote: "Forever Loved",
  },
} as const;

export type MemorialContent = typeof memorial;
