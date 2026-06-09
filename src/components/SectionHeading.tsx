"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding: ${({ theme }) => theme.layout.sectionPadding} 0;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    padding: ${({ theme }) => theme.layout.mobileSectionPadding} 0;
  }
`;

export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.rose};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.34em;
  text-align: center;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(26px, 5vw, 34px);
  font-weight: 500;
  letter-spacing: 0.01em;
  margin-top: 14px;
  text-align: center;
`;

export const HairlineRule = styled.div`
  width: 72px;
  height: 1px;
  margin: 22px auto 0;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.ivoryLine} 28%,
    ${({ theme }) => theme.colors.ivoryLine} 72%,
    transparent
  );
`;
