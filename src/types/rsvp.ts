export type AttendValue = "funeral" | "reception" | "both" | "none";

export interface RsvpData {
  firstName: string;
  lastName: string;
  attend: AttendValue | null;
  count: number;
  message: string;
}
