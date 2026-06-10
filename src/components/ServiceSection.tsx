"use client";

import styled from "styled-components";
import type { MemorialContent } from "@/content/memorial";
import { Eyebrow, HairlineRule, Section, SectionTitle } from "./SectionHeading";

type ServiceDetails = MemorialContent["service"] | MemorialContent["reception"];

const Cards = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: 1fr 1fr;
  margin-top: 44px;

  @media (max-width: ${({ theme }) => theme.layout.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.ivory}
  );
  border: 1px solid ${({ theme }) => theme.colors.ivoryLine};
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  padding: 34px 30px 32px;
  position: relative;

  &::before {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.rose},
      ${({ theme }) => theme.colors.roseBright}
    );
    content: "";
    height: 3px;
    left: 0;
    opacity: 0.85;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Kicker = styled.p`
  color: ${({ theme }) => theme.colors.sageDeep};
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.01em;
  margin: 12px 0 18px;
`;

const Detail = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 12px;
  margin: 13px 0;
`;

const IconDot = styled.span<{ $sage?: boolean }>`
  background: ${({ $sage }) =>
    $sage ? "rgba(146, 161, 131, 0.18)" : "rgba(139, 26, 47, 0.10)"};
  border-radius: 50%;
  flex: none;
  height: 18px;
  margin-top: 3px;
  position: relative;
  width: 18px;

  &::after {
    background: ${({ $sage, theme }) =>
      $sage ? theme.colors.sageDeep : theme.colors.rose};
    border-radius: 50%;
    content: "";
    inset: 6px;
    opacity: 0.7;
    position: absolute;
  }
`;

const DetailLabel = styled.div`
  color: ${({ theme }) => theme.colors.inkFaint};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const DetailValue = styled.div`
  color: ${({ theme }) => theme.colors.ink};
  font-size: 16px;
  margin-top: 1px;
`;

const SubLine = styled.span`
  color: ${({ theme }) => theme.colors.inkSoft};
  display: block;
  font-size: 14px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-size: 15px;
  line-height: 1.65;
  margin: 18px 0 0;
`;

function ServiceCard({ details }: { details: ServiceDetails }) {
  return (
    <Card>
      <Kicker>{details.label}</Kicker>
      <CardTitle>{details.title}</CardTitle>
      {"date" in details && details.date && (
        <Detail>
          <IconDot />
          <div>
            <DetailLabel>Date</DetailLabel>
            <DetailValue>{details.date}</DetailValue>
          </div>
        </Detail>
      )}
      {"time" in details && details.time && (
        <Detail>
          <IconDot />
          <div>
            <DetailLabel>Time</DetailLabel>
            <DetailValue>{details.time}</DetailValue>
          </div>
        </Detail>
      )}
      {"location" in details && details.location && (
        <Detail>
          <IconDot $sage />
          <div>
            <DetailLabel>Location</DetailLabel>
            <DetailValue>
              {details.location}
              {("address" in details && details.address) && (
                <SubLine>{details.address}</SubLine>
              )}
            </DetailValue>
          </div>
        </Detail>
      )}
      {"description" in details && details.description && (
        <Description>{details.description}</Description>
      )}
    </Card>
  );
}

export function ServiceSection({
  service,
  reception,
}: {
  service: ServiceDetails;
  reception: ServiceDetails;
}) {
  return (
    <Section>
      <Eyebrow>Join Us</Eyebrow>
      <SectionTitle>Service &amp; Gathering</SectionTitle>
      <HairlineRule />
      <Cards>
        <ServiceCard details={service} />
        <ServiceCard details={reception} />
      </Cards>
    </Section>
  );
}
