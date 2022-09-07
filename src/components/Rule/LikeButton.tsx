import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

type LikeButtonProps = {
  value: number;
  direction: "increment" | "decrement";
  onClick: () => void;

};
export function LikeButton(props: LikeButtonProps) {
  return <button onClick={props.onClick} type="button" className="border p-4" title={props.direction === "increment" ? "+1" : "-1"}>
    {props.value}
    <FontAwesomeIcon icon={props.direction === 'increment' ? faThumbsUp : faThumbsDown} />
  </button>;
}
LikeButton.propTypes = {
  direction: PropTypes.oneOf(["increment", "decrement"]),
};

