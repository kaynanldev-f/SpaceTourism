const baseUrl = "http://127.0.0.1:51442/api/";

export async function getDestinations() {
  try {
    const response = await fetch(`${baseUrl}destinations`);
    const res = await response.json();
    console.log("Fetched destinations:", res);
    return res;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
}
