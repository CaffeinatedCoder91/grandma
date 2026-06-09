/*
 * Google Apps Script for RSVP Form Responses
 *
 * Instructions:
 * 1. Go to Google Sheets and open your memorial responses sheet
 * 2. Click Extensions > Apps Script
 * 3. Delete the default code and paste the script below into the editor
 * 4. Save the project
 * 5. Click Deploy > New deployment > Web app
 * 6. Set "Execute as" to your Google account
 * 7. Set "Who has access" to "Anyone"
 * 8. Click Deploy and copy the deployment URL
 * 9. Add the URL to .env.local as NEXT_PUBLIC_SHEETS_URL
 *
 * Sheet Setup:
 * Create a sheet with these columns (in this order):
 * A: Timestamp
 * B: First Name
 * C: Last Name
 * D: Attending
 * E: Guests
 * F: Message
 *
 * Apps Script Code:
 * ─────────────────
 *
 * function doPost(e) {
 *   try {
 *     const sheet = SpreadsheetApp.getActiveSheet();
 *     const data = JSON.parse(e.postData.contents);
 *
 *     const attendanceMap = {
 *       'funeral': 'Funeral service',
 *       'reception': 'Reception',
 *       'both': 'Both',
 *       'none': 'Unable to attend'
 *     };
 *
 *     const timestamp = new Date().toISOString();
 *     const firstName = data.firstName || '';
 *     const lastName = data.lastName || '';
 *     const attending = attendanceMap[data.attend] || data.attend;
 *     const guests = data.count || 1;
 *     const message = data.message || '';
 *
 *     sheet.appendRow([timestamp, firstName, lastName, attending, guests, message]);
 *
 *     return ContentService.createTextOutput(
 *       JSON.stringify({ result: 'success' })
 *     ).setMimeType(ContentService.MimeType.JSON);
 *   } catch (error) {
 *     return ContentService.createTextOutput(
 *       JSON.stringify({ result: 'error', message: error.toString() })
 *     ).setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 */
