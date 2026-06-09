import { tokens } from "./tokens";

export const theme = {
  colors: {
    pageBg: tokens.colors.pageBg,
    cream: tokens.colors.cream,
    creamDeep: tokens.colors.creamDeep,
    ivory: tokens.colors.ivory,
    ivoryLine: tokens.colors.ivoryLine,
    surface: tokens.colors.cardSurface,
    portraitBorder: tokens.colors.portraitBorder,
    rose: tokens.colors.rose,
    roseBright: tokens.colors.roseBright,
    rosePressed: tokens.colors.rosePressed,
    roseMist: tokens.colors.roseMist,
    sage: tokens.colors.sage,
    sageDeep: tokens.colors.sageDeep,
    ink: tokens.colors.ink,
    inkSoft: tokens.colors.inkSoft,
    inkFaint: tokens.colors.inkFaint,
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
