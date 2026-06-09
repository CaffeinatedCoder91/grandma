export const theme = {
  colors: {
    pageBg: "#FBFAF7",
    cream: "#FBF6EE",
    creamDeep: "#F6EEE1",
    ivory: "#F1E7D8",
    ivoryLine: "#E6D8C3",
    surface: "#FFFDF9",
    portraitBorder: "#FFFEFB",
    rose: "#8B1A2F",
    roseBright: "#A8324A",
    rosePressed: "#761225",
    roseMist: "rgba(139, 26, 47, 0.10)",
    sage: "#92A183",
    sageDeep: "#6F7E61",
    ink: "#403930",
    inkSoft: "#6B6155",
    inkFaint: "#908577",
  },
  fonts: {
    serif: "var(--font-playfair), 'Playfair Display', Georgia, serif",
    sans: "var(--font-nunito), 'Nunito Sans', system-ui, -apple-system, sans-serif",
  },
  layout: {
    maxWidth: "760px",
    pagePadding: "28px",
    sectionPadding: "64px",
    mobileSectionPadding: "50px",
    mobileBreakpoint: "640px",
  },
  radii: {
    card: "16px",
    rsvpPanel: "22px",
    input: "11px",
  },
  shadows: {
    card: "0 14px 34px rgba(64, 50, 30, 0.07)",
    rsvpPanel: "0 20px 50px rgba(64, 50, 30, 0.08)",
    portrait:
      "0 28px 66px rgba(64, 50, 30, 0.18), 0 6px 16px rgba(64, 50, 30, 0.08)",
  },
} as const;

export type MemorialTheme = typeof theme;
