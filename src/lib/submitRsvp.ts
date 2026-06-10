import { RsvpData } from "@/types/rsvp";

export async function submitRsvp(data: RsvpData): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    throw new Error("Missing Formspree endpoint");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      attendance: data.attend,
      guests: data.count,
      message: data.message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit RSVP to Formspree");
  }
}
