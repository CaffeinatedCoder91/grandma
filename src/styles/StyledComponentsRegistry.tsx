"use client";

import { ReactNode, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import styled, {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.pageBg};
    font-family: ${({ theme }) => theme.fonts.sans};
    line-height: 1.65;
    font-weight: 400;
    letter-spacing: 0.005em;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.001ms !important;
    }
  }
`;

const PageShell = styled.main`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.pagePadding};
  position: relative;
  z-index: 1;
`;

export function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageShell>{children}</PageShell>
      </ThemeProvider>
    );
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageShell>{children}</PageShell>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
