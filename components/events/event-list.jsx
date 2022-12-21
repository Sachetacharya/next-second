// import

import EventItem from "./event-item";
import classes from  './event-list.module.css'

const EventList = (props) => {
  const { items } = props;
//   console.log(items);

  return (
    <ul className={classes.list}>
      {items.map((item) => 
        <EventItem
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
          key={item.id}
        />
      )}
    </ul>
  );
};

export default EventList;
