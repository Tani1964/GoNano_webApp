import { google } from "googleapis";

export async function uploadToGoogleSheets(leads: any[]) {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;

  const header = Object.keys(leads[0]);
  const values = [header, ...leads.map((l) => Object.values(l))];

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: "Sheet1!A1",
    valueInputOption: "RAW",
    requestBody: { values },
  });

  console.log(`✅ Uploaded ${leads.length} leads to Google Sheets`);
}
