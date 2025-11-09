const CURRENT_YEAR = new Date().getFullYear();
const STORM_PRONE_ZIPS = ["78660", "78634", "78653", "76574", "78621"];

export function scoreLead(lead: any): number {
  let score = 0;
  const homeAge = CURRENT_YEAR - (lead.year_built || CURRENT_YEAR);

  if (homeAge >= 20) score += 4;
  else if (homeAge >= 15) score += 3;
  else if (homeAge >= 10) score += 2;

  if (STORM_PRONE_ZIPS.includes(lead.zip)) score += 2;

  if (lead.roof_type?.toLowerCase().includes("asphalt")) score += 2;

  return score;
}
