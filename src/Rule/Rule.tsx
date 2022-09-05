import { faChevronDown, faPencil, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import './Rule.css'

type RuleProps = {
  "id": number;
  "title": string;
  "description"?: string;
  "likes": number;
  "dislikes": number;
  "tags": string[];

};
export const Rule: FC<RuleProps> = (props) => (
  <section className="rule">
    <header className="bg-blue-400 text-3xl p-4 text-white flex justify-between
items-center">
      {props.title}
      <FontAwesomeIcon className="m-4" icon={faChevronDown} />
    </header>
    <p className="p-4 text-2xl">{props.description}</p>
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
          <button type="button" className="border p-4" title="+1">
            {props.likes}
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button type="button" className="border p-4" title="-1">
            {props.dislikes}
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </div>
      </div>
    </footer>
  </section>
);

