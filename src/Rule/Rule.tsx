import { faChevronDown, faPencil, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import PropTypes from 'prop-types'
import './Rule.css'

type RuleProps = {
  "id": number;
  "title": string;
  "description"?: string;
  "likes": number;
  "dislikes": number;
  "tags": string[];

};
export const Rule: FC<RuleProps> = (props) => {
  const [folded, setFolded] = useState(!Boolean(props.description))

  return (
    <section className="rule">
      <header className="bg-blue-400 text-3xl p-4 text-white flex justify-between
items-center" onClick={() => setFolded(previousValue => !previousValue)}>
        {props.title}
        <FontAwesomeIcon className={`m-4 transition-transform ${folded ? "rotate-180" : ""}`} icon={faChevronDown} />
      </header>
      <p className={`p-4 text-2xl ${folded ? "hidden" : ""}`}>{props.description}</p>
      <footer className="p-4 border flex justify-between items-center">
        <div>
          {props.tags.map(tag => (
            <span key={tag} className="p-4 bg-gray-400 rounded text-white text-2xl mx-4">{tag}</span>
          ))}
        </div>
        <div className="flex justify-end">
          <button type="button" className="bg-blue-400 p-4 rounded text-2xl">
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <div className="flex">
            <LikeButton value={props.likes} direction='increment' />
            <LikeButton value={props.dislikes} direction='decrement' />
          </div>
        </div>
      </footer>
    </section>
  )
};

type LikeButtonProps =  {
  value: number;
  direction: "increment" | "decrement"

}
function LikeButton(props: LikeButtonProps) {
  const [likes, setLikes] = useState(props.value)
  return <button onClick={() => setLikes(likes + 1)} type="button" className="border p-4" title={props.direction === "increment" ? "+1" : "-1"}>
    {likes}
    <FontAwesomeIcon icon={props.direction === 'increment' ? faThumbsUp : faThumbsDown} />
  </button>;
}

 LikeButton.propTypes = {
  direction: PropTypes.oneOf(["increment", "decrement"]),
}
