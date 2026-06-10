"use client";

import styled from "styled-components";
import { FloralOrnament } from "./FloralOrnament";
import { Eyebrow } from "./SectionHeading";
import type { MemorialContent } from "@/content/memorial";

type Person = MemorialContent["person"];

const Hero = styled.header`
  padding: 88px 0 80px;
  position: relative;
  text-align: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    padding: 56px 0;
  }
`;

const OrnamentWrap = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
`;

const PortraitWrap = styled.div`
  height: 650px;
  margin: 44px auto 4px;
  position: relative;
  width: 550px;

  &::before {
    content: "";
    position: absolute;
    inset: -60px;
    z-index: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(139, 26, 47, 0.07),
      rgba(146, 161, 131, 0.05) 48%,
      transparent 72%
    );
  }

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    height: 480px;
    width: 380px;
  }
`;

const PortraitFrame = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.inkFaint};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 20px;
  font-style: italic;
  height: 650px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 550px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    height: 480px;
    width: 380px;
  }
`;

const PortraitImage = styled.img`
  display: block;
  height: 650px;
  object-fit: contain;
  position: absolute;
  inset: 0;
  width: 550px;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    height: 480px;
    width: 380px;
  }
`;

const Placeholder = styled.span`
  display: block;
  padding: 0 28px;
`;

const HeroName = styled.h1`
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(46px, 11vw, 78px);
  font-weight: 500;
  letter-spacing: 0.005em;
  line-height: 1.02;
  margin-top: 38px;
`;

const HeroYears = styled.p`
  color: ${({ theme }) => theme.colors.rose};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.42em;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.sageDeep};
  margin: 0 4px;
`;

const Tribute = styled.p`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(19px, 3.4vw, 23px);
  font-style: italic;
  line-height: 1.55;
  margin: 28px auto 0;
  max-width: 30ch;
  text-wrap: balance;
`;

export function HeroSection({ person }: { person: Person }) {
  return (
    <Hero>
      <OrnamentWrap>
        <FloralOrnament />
      </OrnamentWrap>
      <Eyebrow>In Loving Memory</Eyebrow>

      <PortraitWrap>
        <PortraitFrame>
          {person.portraitSrc ? (
            <PortraitImage
              src={person.portraitSrc}
              alt={`Portrait of ${person.fullName}`}
            />
          ) : (
            <Placeholder>Add her photo</Placeholder>
          )}
        </PortraitFrame>
      </PortraitWrap>

      <HeroName>
        {person.displayNameLines.map((line, index) => (
          <span key={line}>
            {line}
            {index < person.displayNameLines.length - 1 ? <br /> : null}
          </span>
        ))}
      </HeroName>
      <HeroYears>
        {person.years.born} <Star>✧</Star> {person.years.died}
      </HeroYears>
      <Tribute>{person.tribute}</Tribute>
    </Hero>
  );
}
