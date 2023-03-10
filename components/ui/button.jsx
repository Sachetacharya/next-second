import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <div className={classes.btn}>{props.children}</div>
      </Link>
    );
  }
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};
export default Button;
