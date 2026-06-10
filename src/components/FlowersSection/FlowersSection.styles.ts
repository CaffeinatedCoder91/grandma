"use client";

import styled from "styled-components";
import { Section } from "@/components/SectionHeading";

export const Note = styled(Section)`
  background: radial-gradient(
    140% 120% at 50% 0%,
    color-mix(in srgb, ${({ theme }) => theme.colors.surface} 90%, transparent),
    color-mix(in srgb, ${({ theme }) => theme.colors.creamDeep} 0%, transparent) 70%
  );
  text-align: center;
`;

export const Copy = styled.p`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-size: 17px;
  line-height: 1.85;
  margin: 30px auto 0;
  max-width: 480px;
  text-align: center;
  text-wrap: pretty;
`;
