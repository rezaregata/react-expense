/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card(props) {
  return <div className={"card " + props.className}>{props.children}</div>;
}
