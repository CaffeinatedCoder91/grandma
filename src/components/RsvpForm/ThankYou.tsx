"use client";

import { AttendValue } from "@/types/rsvp";
import { ThankYouWrapper, ThankYouMessage, CheckmarkIcon } from "./ThankYou.styles";

interface ThankYouProps {
  firstName: string;
  attend: AttendValue;
  count: number;
}

export function ThankYou({ firstName, attend, count }: ThankYouProps) {
  let message = "";

  if (attend === "none") {
    message = `Thank you for letting us know, ${firstName}. You'll be held in our thoughts on the day.`;
  } else {
    const venues = {
      funeral: "the funeral service",
      reception: "the reception",
      both: "both events",
    } as Record<Exclude<AttendValue, "none">, string>;

    message = `We're so glad you'll be with us at ${venues[attend]}, ${firstName}.`;

    if (count > 1) {
      message += ` We'll set ${count} places.`;
    }
  }

  return (
    <ThankYouWrapper>
      <CheckmarkIcon />
      <ThankYouMessage>{message}</ThankYouMessage>
    </ThankYouWrapper>
  );
}
