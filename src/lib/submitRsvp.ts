import { RsvpData } from "@/types/rsvp";

export async function submitRsvp(data: RsvpData): Promise<void> {
  const response = await fetch("/api/rsvp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit RSVP");
  }
}
