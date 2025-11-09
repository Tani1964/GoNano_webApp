const ZILLOW_API_KEY = process.env.ZILLOW_RAPIDAPI_KEY!;
const ZILLOW_API_HOST = "zillow-com1.p.rapidapi.com";
function formatPhone(phoneObj: any) {
  if (!phoneObj) return null;
  const { areacode, prefix, number } = phoneObj;
  return areacode && prefix && number ? `(${areacode}) ${prefix}-${number}` : null;
}


export async function fetchZillowProperties(zip: string) {
  const zpids = {
    "78660": [92593],
    "78634": [92570],
    "78653": [92586],
    "76574": [91486],
    "78621": [92559],
  }[zip] || [];

  const results: any[] = [];

  for (const zpid of zpids) {
    try {
      const res = await fetch(
        `https://${ZILLOW_API_HOST}/property?zpid=${zpid}`,
        {
          headers: {
            "x-rapidapi-key": ZILLOW_API_KEY,
            "x-rapidapi-host": ZILLOW_API_HOST,
          },
        }
      );

      if (!res.ok) continue;
      const data = await res.json();

      const property = {
  address: data?.address?.streetAddress,
  city: data?.address?.city,
  zip: data?.address?.zipcode,
  year_built: data?.yearBuilt || 2000,
  roof_type: data?.resoFacts?.roofType || "Asphalt",
  agent_name: data?.contact_recipients?.[0]?.display_name || null,
  agent_phone: formatPhone(data?.contact_recipients?.[0]?.phone),
  listing_agent_name: data?.listed_by?.display_name || null,
  listing_agent_phone: formatPhone(data?.listed_by?.phone),
  broker_name: data?.listed_by?.business_name || data?.brokerageName || null,
  source: "Zillow",
};


      results.push(property);
    } catch (err) {
      console.error("Zillow fetch error:", err);
    }

    await new Promise((r) => setTimeout(r, 1000)); // rate limit
  }

  return results;
}
