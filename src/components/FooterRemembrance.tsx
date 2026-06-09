"use client";

import styled from "styled-components";
import type { MemorialContent } from "@/content/memorial";
import { FloralOrnament } from "./FloralOrnament";

type Person = MemorialContent["person"];
type Footer = MemorialContent["footer"];

const FooterWrap = styled.footer`
  padding: 64px 0;
  position: relative;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    padding: 50px 0;
  }
`;

const OrnamentWrap = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
  min-height: 48px;
`;

const Quote = styled.p`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 21px;
  font-style: italic;
  margin: 0 auto;
  max-width: 32ch;
  text-wrap: balance;
`;

const Meta = styled.p`
  color: ${({ theme }) => theme.colors.inkFaint};
  font-size: 12.5px;
  letter-spacing: 0.22em;
  margin-top: 26px;
  text-transform: uppercase;
`;

export function FooterRemembrance({
  person,
  footer,
}: {
  person: Person;
  footer: Footer;
}) {
  return (
    <FooterWrap>
      <OrnamentWrap>
        <FloralOrnament small />
      </OrnamentWrap>
      <Quote>{footer.quote}</Quote>
      <Meta>
        {person.fullName} &middot; {person.years.born} — {person.years.died}
      </Meta>
    </FooterWrap>
  );
}
