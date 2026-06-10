"use client";

import { Eyebrow, HairlineRule, SectionTitle } from "@/components/SectionHeading";
import { Note, Copy } from "./FlowersSection.styles";

interface FlowersSectionProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function FlowersSection({ eyebrow, title, body }: FlowersSectionProps) {
  return (
    <Note>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle>{title}</SectionTitle>
      <HairlineRule />
      <Copy>{body}</Copy>
    </Note>
  );
}
