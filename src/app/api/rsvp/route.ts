import { RsvpData } from "@/types/rsvp";

export async function POST(request: Request) {
  try {
    const data: RsvpData = await request.json();

    const sheetsUrl = process.env.NEXT_PUBLIC_SHEETS_URL;
    if (!sheetsUrl) {
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
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
      throw new Error(`Google Apps Script error: ${response.statusText}`);
    }

    return Response.json({ result: "success" });
  } catch (error) {
    console.error("RSVP submission error:", error);
    return Response.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
