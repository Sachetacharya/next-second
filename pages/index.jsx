import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featureEvent = getFeaturedEvents();

//   console.log(featureEvent)
  return (
    <div>
        {/* <h1>here</h1> */}
      <EventList items = {featureEvent} />
          </div>
  );
};
export default HomePage;
