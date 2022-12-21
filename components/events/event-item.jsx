/* eslint-disable @next/next/no-img-element */

import Button from "../ui/button";
import classes from "./event-item.module.css";

const EventItem = (props) => {
//   console.log(props);
  // return <h1>event item</h1>
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formateAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  //   console.log(exploreLink)

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formateAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={exploreLink}></Link> */}
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
