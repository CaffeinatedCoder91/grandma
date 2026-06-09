import { RsvpData } from "@/types/rsvp";

// Implementation options:
// 1. Local state only (current): resolves immediately with no side effects
// 2. API route: POST to /api/rsvp with the RsvpData payload
// 3. Third-party service: send to Google Sheets, Airtable, or a webhook
// 4. Email: trigger a serverless function to email the response
//
// The component UI does not need to change; only this function's implementation.

export async function submitRsvp(data: RsvpData): Promise<void> {
  console.log("RSVP submitted locally", data);
}
