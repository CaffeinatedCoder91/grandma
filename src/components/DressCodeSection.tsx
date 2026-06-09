"use client";

import styled from "styled-components";
import { Eyebrow, HairlineRule, Section, SectionTitle } from "./SectionHeading";

const Note = styled(Section)`
  background: radial-gradient(
    140% 120% at 50% 0%,
    rgba(255, 253, 249, 0.9),
    rgba(241, 231, 216, 0) 70%
  );
  text-align: center;
`;

const Copy = styled.p`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-size: 17px;
  line-height: 1.85;
  margin: 30px auto 0;
  max-width: 480px;
  text-align: center;
  text-wrap: pretty;
`;

export function DressCodeSection({ copy }: { copy: string }) {
  return (
    <Note>
      <Eyebrow>A Gentle Note</Eyebrow>
      <SectionTitle>Dress Code</SectionTitle>
      <HairlineRule />
      <Copy>{copy}</Copy>
    </Note>
  );
}
