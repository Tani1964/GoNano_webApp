const REALTOR_API_KEY = process.env.REALTOR_API_KEY!;
const REALTOR_API_HOST = "realtor-com-scraper.p.rapidapi.com";
function formatPhone(phoneObj: any) {
  if (!phoneObj) return null;
  const { areacode, prefix, number } = phoneObj;
  return areacode && prefix && number ? `(${areacode}) ${prefix}-${number}` : null;
}


export async function fetchRealtorProperties(zip: string, city: string, state: string) {
  const url = `https://${REALTOR_API_HOST}/properties/search_to_rent`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "x-rapidapi-key": REALTOR_API_KEY,
        "x-rapidapi-host": REALTOR_API_HOST,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city_name: city,
        state_slug: state,
        postal_code: zip,
        offset: 0,
      }),
    });

    const json = await res.json();
    const properties =
  json?.data?.home_search?.properties?.map((p: any) => ({
    address: p.location?.address?.line,
    city: p.location?.address?.city,
    zip: p.location?.address?.postal_code,
    year_built: p.description?.year_built || 2000,
    roof_type: "Asphalt",
    agent_name: p.advertisers?.[0]?.name || null,
    agent_phone: p.advertisers?.[0]?.phones?.[0]?.number || null,
    listing_agent_name: p.advertisers?.[0]?.name || null,
    listing_agent_phone: p.advertisers?.[0]?.phones?.[0]?.number || null,
    broker_name: p.advertisers?.[0]?.office?.name || null,
    source: "Realtor.com",
  })) || [];

    return properties;
  } catch (err) {
    console.error("Realtor fetch error:", err);
    return [];
  }
}
