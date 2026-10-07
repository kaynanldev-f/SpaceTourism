import ContentDestination from "@/app/components/destination/ContentDestination";
import { getDestinations } from "@/app/services/api";
export default async function DestinationPage() {
  const destinationsData = await getDestinations();
  return <ContentDestination destinationData={destinationsData} />;
}
