import { faChevronDown, faPencil, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import PropTypes from 'prop-types'
import './Rule.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { like as likeAction, dislike as dislikeAction } from "../../store/rules.store";

export type RuleProps = {
  "id": number;
  "title": string;
  "description"?: string;
  "likes": number;
  "dislikes": number;
  "status": "validated" | "pending" | "rejected"
  "tags": string[];

};
export const Rule: FC<RuleProps> = (props) => {
  const [folded, setFolded] = useState(!Boolean(props.description))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const like = () => {
    dispatch(likeAction(props))

  }
  const dislike = () => {
    dispatch(dislikeAction(props))

  }

  return (
    <section className="rule">
      <header className="bg-blue-400 text-xl p-4 text-white flex justify-between
items-center rounded-t" onClick={() => setFolded(previousValue => !previousValue)}>
        {props.title}
        <FontAwesomeIcon className={`m-4 transition-transform ${folded ? "rotate-180" : ""}`} icon={faChevronDown} />
      </header>
      <p className={`p-4 text-xl ${folded ? "hidden" : "bg-gray-100"}`}>{props.description}</p>
      <footer className="p-4 border flex justify-between items-center">
        <div>
          {props.tags.map(tag => (
            <span key={tag} className="p-4 bg-gray-400 rounded text-white text-xl mx-4">{tag}</span>
          ))}
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={() => {
            navigate(`/edit/${props.id}`)
          }} className="bg-blue-400 p-4 rounded text-xl">
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <div className="flex">
            <LikeButton onClick={like} value={props.likes} direction='increment' />
            <LikeButton onClick={dislike} value={props.dislikes} direction='decrement' />
          </div>
        </div>
      </footer>
    </section>
  )
};

type LikeButtonProps = {
  value: number;
  direction: "increment" | "decrement"
  onClick: () => void

}
function LikeButton(props: LikeButtonProps) {
  return <button onClick={props.onClick} type="button" className="border p-4" title={props.direction === "increment" ? "+1" : "-1"}>
    {props.value}
    <FontAwesomeIcon icon={props.direction === 'increment' ? faThumbsUp : faThumbsDown} />
  </button>;
}

LikeButton.propTypes = {
  direction: PropTypes.oneOf(["increment", "decrement"]),
}
