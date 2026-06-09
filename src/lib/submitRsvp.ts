import { RsvpData } from "@/types/rsvp";

export async function submitRsvp(data: RsvpData): Promise<void> {
  const sheetsUrl = process.env.NEXT_PUBLIC_SHEETS_URL;

  if (!sheetsUrl) {
    throw new Error("NEXT_PUBLIC_SHEETS_URL environment variable is not set");
  }

  const response = await fetch(sheetsUrl, {
    method: "POST",
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      attend: data.attend,
      count: data.count,
      message: data.message,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit RSVP: ${response.statusText}`);
  }
}
