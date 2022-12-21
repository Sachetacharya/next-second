import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "./events-search";
import { useRouter } from "next/router";

const Eventpage = () => {
  const event = getAllEvents();

  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      {/* <ul> */}
      <EventSearch onSearch={findEventHandler} />
      <EventList items={event} />
      {/* </ul> */}
    </div>
  );
};
export default Eventpage;
