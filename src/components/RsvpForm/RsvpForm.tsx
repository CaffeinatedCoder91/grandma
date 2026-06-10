"use client";

import { useRef, useState } from "react";
import { Eyebrow, HairlineRule, SectionTitle } from "@/components/SectionHeading";
import { AttendValue, RsvpData } from "@/types/rsvp";
import { submitRsvp } from "@/lib/submitRsvp";
import { AttendanceToggle } from "./AttendanceToggle";
import { Stepper } from "./Stepper";
import { ThankYou } from "./ThankYou";
import {
  ContactRow,
  Field,
  FieldError,
  FormGrid,
  Input,
  Label,
  NameRow,
  OptionalSuffix,
  Panel,
  Section,
  SubmitButton,
  Textarea,
} from "./RsvpForm.styles";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  attend?: string;
}

export function RsvpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attend, setAttend] = useState<AttendValue | null>(null);
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!attend) {
      newErrors.attend = "Please select an attendance option";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.firstName) {
        firstNameRef.current?.focus();
      } else if (newErrors.lastName) {
        lastNameRef.current?.focus();
      }
      return false;
    }

    return true;
  };

  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
    if (errors.firstName) {
      setErrors((prev) => ({ ...prev, firstName: undefined }));
    }
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value);
    if (errors.lastName) {
      setErrors((prev) => ({ ...prev, lastName: undefined }));
    }
  };

  const handleAttendChange = (value: AttendValue) => {
    setAttend(value);
    if (errors.attend) {
      setErrors((prev) => ({ ...prev, attend: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const rsvpData: RsvpData = {
      firstName,
      lastName,
      email,
      phone,
      attend: attend!,
      count,
      message,
    };

    try {
      await submitRsvp(rsvpData);
      setSubmitted(true);
      setSubmitError(false);
    } catch {
      setSubmitError(true);
    }
  };

  if (submitted && attend) {
    return (
      <Section>
        <Eyebrow>Kindly Reply</Eyebrow>
        <SectionTitle>Let Us Know You&rsquo;ll Be There</SectionTitle>
        <HairlineRule />

        <Panel>
          <ThankYou firstName={firstName} attend={attend} count={count} />
        </Panel>

      </Section>
    );
  }

  return (
    <Section>
      <Eyebrow>Kindly Reply</Eyebrow>
      <SectionTitle>Let Us Know You&rsquo;ll Be There</SectionTitle>
      <HairlineRule />

      <Panel>
        <FormGrid onSubmit={handleSubmit}>
          <NameRow>
            <Field>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                ref={firstNameRef}
                id="firstName"
                type="text"
                placeholder=""
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => handleFirstNameChange(e.target.value)}
                $error={!!errors.firstName}
              />
              {errors.firstName && <FieldError>{errors.firstName}</FieldError>}
            </Field>
            <Field>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                ref={lastNameRef}
                id="lastName"
                type="text"
                placeholder=""
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => handleLastNameChange(e.target.value)}
                $error={!!errors.lastName}
              />
              {errors.lastName && <FieldError>{errors.lastName}</FieldError>}
            </Field>
          </NameRow>

          <ContactRow>
            <Field>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="e.g. margaret@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="e.g. 07700 900000"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Field>
          </ContactRow>

          <Field>
            <Label>Will You Join Us?</Label>
            <AttendanceToggle
              value={attend}
              onChange={handleAttendChange}
              error={!!errors.attend}
            />
            {errors.attend && <FieldError>{errors.attend}</FieldError>}
          </Field>

          {attend && attend !== "none" && (
            <Field>
              <Label>Number of Guests</Label>
              <Stepper value={count} onChange={setCount} />
            </Field>
          )}

          <Field>
            <Label htmlFor="message">
              Message <OptionalSuffix>(Optional)</OptionalSuffix>
            </Label>
            <Textarea
              id="message"
              placeholder="Share your thoughts and memories..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Field>

          <SubmitButton type="submit">Send My Reply</SubmitButton>
          {submitError && (
            <FieldError>
              Something went wrong — please email us directly.
            </FieldError>
          )}
        </FormGrid>
      </Panel>

    </Section>
  );
}
