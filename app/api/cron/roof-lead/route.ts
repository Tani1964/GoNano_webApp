import { NextResponse } from "next/server";
import { uploadToGoogleSheets } from "../../../../lib/googleSheets";
import { scoreLead } from "../../../../lib/leadScoring";
import { fetchRealtorProperties } from "../../../../lib/realtor";
import { fetchZillowProperties } from "../../../../lib/zillow";

export const dynamic = "force-dynamic"; // ensure runs server-side

export const revalidate = 0; // disable caching

export async function GET() {
  console.log("🏠 Starting Roof Rejuvenation Lead Generator");

  const ZIP_TO_CITY: Record<string, string> = {
    "78660": "Pflugerville",
    "78634": "Georgetown",
    "78653": "Manor",
    "76574": "Taylor",
    "78621": "Elgin",
  };

  const allLeads: any[] = [];

  for (const [zip, city] of Object.entries(ZIP_TO_CITY)) {
    console.log(`📍 Fetching leads for ${city} (${zip})`);

    const zillowProps = await fetchZillowProperties(zip);
    const realtorProps = await fetchRealtorProperties(zip, city, "tx");

    const combined = [...zillowProps, ...realtorProps];

    for (const prop of combined) {
      const leadScore = scoreLead(prop);
      allLeads.push({ ...prop, leadScore });
    }
  }

  if (allLeads.length === 0) {
    return NextResponse.json({ message: "No leads found" });
  }

  // Upload to Google Sheets
  await uploadToGoogleSheets(allLeads);

  return NextResponse.json({
    count: allLeads.length,
    message: "✅ Leads fetched and uploaded successfully!",
  });
}
