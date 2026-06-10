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
  serviceLocation: {
    venue: "Mortlake Cemetery",
    address: "Clifford Avenue, London SW14 7BU",
    directions: {
      intro: "Mortlake Cemetery is located on the Clifford Avenue A316 which runs from Richmond to Chiswick Bridge. Please note that this is the only entrance in operation, there is no access from Mortlake Rd A205.",
      fromRichmond: "From Richmond / M3 / A316: drive along the Lower Richmond Road A316 towards Chiswick, at Chalkers Corner go straight across at the junction with Mortlake Rd A205. The entrance to the cemetery is on the left before you reach Chiswick Bridge.",
      fromChiswick: "From Chiswick / M4 / A4 / A316: drive along the Great Chertsey Road A316 towards Richmond, after you cross Chiswick Bridge, the entrance to the cemetery will be on your right.",
      ulez: "Ultra Low Emission Zone (ULEZ): Please note that Mortlake Cemetery falls within the ULEZ charging zone (you can check your vehicle's compliance status here).",
    },
    publicTransport: {
      tube: "Kew Gardens (District Line) – approx 10 mins walk",
      bus: ["190", "419"],
      nationalRail: "Mortlake (approx 10 mins walk)",
    },
  },
  reception: {
    label: "Reception After",
    title: "Remembrance",
    description: "Following the service, you are invited to join us for refreshments at a local venue (details will be shared here once confirmed).",
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
