import data from './data.json'
import { Rule } from "./Rule/Rule";

export default function RuleList() {
  return (
    <div>
      {data.map(rule => (
        <Rule key={rule.id} {...rule} />
      ))}
    </div>
  )
}


