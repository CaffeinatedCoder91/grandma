"use client";

import styled from "styled-components";
import type { MemorialContent } from "@/content/memorial";
import { Eyebrow, HairlineRule, Section, SectionTitle } from "./SectionHeading";

type ServiceLocation = MemorialContent["serviceLocation"];

const Content = styled.div`
  margin: 44px auto 0;
  max-width: 600px;
`;

const LocationCard = styled.article`
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

const LocationHeading = styled.h3`
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.01em;
  margin: 0 0 22px;
`;

const SubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.sageDeep};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  margin: 24px 0 8px;
  text-transform: uppercase;

  &:first-child {
    margin-top: 0;
  }
`;

const VenueLabel = styled.p`
  color: ${({ theme }) => theme.colors.inkFaint};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  margin: 0 0 4px;
  text-transform: uppercase;
`;

const VenueName = styled.p`
  color: ${({ theme }) => theme.colors.ink};
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 12px;
`;

const AddressText = styled.p`
  color: ${({ theme }) => theme.colors.ink};
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 16px;
`;

const DirectionText = styled.p`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-size: 15px;
  line-height: 1.65;
  margin: 0 0 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TransportItem = styled.div`
  color: ${({ theme }) => theme.colors.ink};
  font-size: 15px;
  margin: 8px 0;
  line-height: 1.6;
`;

const TransportLabel = styled.span`
  color: ${({ theme }) => theme.colors.inkFaint};
  font-weight: 600;
`;

export function ServiceLocationSection({
  serviceLocation,
}: {
  serviceLocation: ServiceLocation;
}) {
  return (
    <Section>
      <Eyebrow>Find Us</Eyebrow>
      <SectionTitle>Service Location</SectionTitle>
      <HairlineRule />
      <Content>
        <LocationCard>
          <VenueLabel>Venue</VenueLabel>
          <VenueName>{serviceLocation.venue}</VenueName>

          <SubHeading>Address</SubHeading>
          <AddressText>{serviceLocation.address}</AddressText>

          <SubHeading>Directions</SubHeading>
          <DirectionText>{serviceLocation.directions.intro}</DirectionText>
          <DirectionText>{serviceLocation.directions.fromRichmond}</DirectionText>
          <DirectionText>{serviceLocation.directions.fromChiswick}</DirectionText>
          <DirectionText>{serviceLocation.directions.ulez}</DirectionText>

          <SubHeading>Public Transport</SubHeading>
          <TransportItem>
            <TransportLabel>Nearest Tube:</TransportLabel>{" "}
            {serviceLocation.publicTransport.tube}
          </TransportItem>
          <TransportItem>
            <TransportLabel>Bus:</TransportLabel>{" "}
            {serviceLocation.publicTransport.bus.join(", ")}
          </TransportItem>
          <TransportItem>
            <TransportLabel>National Rail:</TransportLabel>{" "}
            {serviceLocation.publicTransport.nationalRail}
          </TransportItem>
        </LocationCard>
      </Content>
    </Section>
  );
}
