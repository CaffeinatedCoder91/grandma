"use client";

import { useRef } from "react";
import { AttendValue } from "@/types/rsvp";
import {
  ChoiceButton,
  ChoicesGridWrapper,
} from "./RsvpForm.styles";

interface AttendanceToggleProps {
  value: AttendValue | null;
  onChange: (value: AttendValue) => void;
  error?: boolean;
}

export function AttendanceToggle({
  value,
  onChange,
  error,
}: AttendanceToggleProps) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const options: { id: AttendValue; label: string }[] = [
    { id: "funeral", label: "The funeral service" },
    { id: "reception", label: "The reception" },
    { id: "both", label: "Both, gladly" },
    { id: "none", label: "Sadly, I can't attend" },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = index === 0 ? options.length - 1 : index - 1;
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = index === options.length - 1 ? 0 : index + 1;
    } else {
      return;
    }

    onChange(options[nextIndex].id);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <ChoicesGridWrapper role="radiogroup" aria-label="Will you join us?" $error={error}>
      {options.map((option, index) => (
        <ChoiceButton
          key={option.id}
          type="button"
          role="radio"
          aria-checked={value === option.id}
          $selected={value === option.id}
          tabIndex={value === option.id || (!value && index === 0) ? 0 : -1}
          ref={(element) => {
            buttonRefs.current[index] = element;
          }}
          onClick={() => onChange(option.id)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {option.label}
        </ChoiceButton>
      ))}
    </ChoicesGridWrapper>
  );
}
