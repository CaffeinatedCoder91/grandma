"use client";

import { Eyebrow, HairlineRule, SectionTitle } from "@/components/SectionHeading";
import {
  ChoiceButton,
  ChoicesGrid,
  Field,
  FormGrid,
  Input,
  Label,
  NameRow,
  Note,
  OptionalSuffix,
  Panel,
  Section,
  SubmitButton,
  Textarea,
} from "./RsvpForm.styles";

export function RsvpForm() {
  const attendanceOptions = [
    { id: "funeral", label: "The funeral service" },
    { id: "reception", label: "The reception" },
    { id: "both", label: "Both, gladly" },
    { id: "none", label: "Sadly, I can't attend" },
  ];

  return (
    <Section>
      <Eyebrow>Kindly Reply</Eyebrow>
      <SectionTitle>Let Us Know You&rsquo;ll Be There</SectionTitle>
      <HairlineRule />

      <Panel>
        <FormGrid>
          <NameRow>
            <Field>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder=""
                autoComplete="given-name"
              />
            </Field>
            <Field>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder=""
                autoComplete="family-name"
              />
            </Field>
          </NameRow>

          <Field>
            <Label>Will You Join Us?</Label>
            <ChoicesGrid role="radiogroup" aria-label="Will you join us?">
              {attendanceOptions.map((option) => (
                <ChoiceButton
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={false}
                  $selected={false}
                >
                  {option.label}
                </ChoiceButton>
              ))}
            </ChoicesGrid>
          </Field>

          <Field>
            <Label htmlFor="message">
              Message <OptionalSuffix>(Optional)</OptionalSuffix>
            </Label>
            <Textarea
              id="message"
              placeholder="Share your thoughts and memories..."
            />
          </Field>

          <SubmitButton type="button">Send My Reply</SubmitButton>
        </FormGrid>
      </Panel>

      <Note>
        Please reply by the 20th of June so we may set a place for you.
      </Note>
    </Section>
  );
}
