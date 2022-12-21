import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "./results-title";

const EventSlam = () => {
  const router = useRouter();
  const filterDate = router.query.slug;
  if (!filterDate) {
    return <p className="center"> Loading</p>;
  }
  const filterYear = +filterDate[0];
  const filterMonth = +filterDate[1];
  if (
    isNaN(filterYear) ||
    isNaN(filterMonth) ||
    filterYear > 2030 ||
    filterYear < 2020 ||
    filterMonth < 1 ||
    filterMonth > 12
  ) {
    return <h1 className="center">Invalid FIlter</h1>;
  }
  // console.log(filterDate, filterMonth, filterYear);

  const filerEvent = getFilteredEvents({
    year: filterYear,
    month: filterMonth,
  });
  if (!filerEvent || filerEvent.length === 0) {
    return (
      <div className="center">
       
        <h1 >Not Found</h1>
        <div className="center"> <Button link ='/events'> Show All Event </Button></div>
       
      </div>
    );
  }

  const date = new Date(filterYear, filterMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filerEvent} />
    </div>
  );
};
export default EventSlam;
